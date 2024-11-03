import { useState } from "react";
import { Button, Container, Stack, Text, Title } from "@mantine/core";

import STATES from "./AssessmentMedical.json";

const STATE_INTRO = 0;
const STATE_QUIZ = 1;
const STATE_END = 2;

const QUIZ_STATE_HIDDEN = 0;
const QUIZ_STATE_HINT = 1;

function AssessmentMedical() {
  const [state, setState] = useState(STATE_INTRO);
  const [index, setIndex] = useState(0);
  const [subindex, setSubindex] = useState(0);
  const [quizState, setQuizState] = useState(QUIZ_STATE_HIDDEN);
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();

  function start() {
    setIndex(0);
    setSubindex(0);
    setQuizState(QUIZ_STATE_HIDDEN);
    setState(STATE_QUIZ);
    setStartTime(new Date());
  }

  function showHint() {
    setQuizState(QUIZ_STATE_HINT);
  }

  const contents = STATES[index];
  const lines = contents.split("\n");

  function showAnswer() {
    let newSubindex;
    for (
      newSubindex = subindex + 1;
      newSubindex <= lines.length;
      newSubindex += 1
    ) {
      if (lines[newSubindex]?.trim() !== "") {
        break;
      }
    }
    setSubindex(newSubindex);
    setQuizState(QUIZ_STATE_HIDDEN);
  }

  function next() {
    setQuizState(QUIZ_STATE_HIDDEN);
    // advance index, reset subindex
    const newIndex = index + 1;
    if (newIndex >= STATES.length) {
      setState(STATE_END);
      setEndTime(new Date());
    } else {
      setIndex(newIndex);
      setSubindex(0);
    }
  }

  function obscured(text) {
    return text.replace(/[A-Za-z0-9]/g, "_");
  }

  function hinted(text) {
    const ht = obscured(text).substring(1);
    return text.substring(0, 1) + ht;
  }

  // const style = {position: 'fixed', bottom: '2rem', width: '200px'};
  const style = { position: "sticky", bottom: "2rem" };

  return (
    <Container size="xs">
      <Title mb="lg">Patient Assessment: Medical</Title>
      {state === STATE_INTRO && (
        <Stack style={style}>
          <Button onClick={start}>Start</Button>
        </Stack>
      )}
      {state === STATE_QUIZ && (
        <>
          <Text style={{ textWrap: "wrap" }} component="pre" mb="5rem" w="100%">
            {lines
              .map((line, i) => {
                if (i < subindex) {
                  return line;
                } else if (i === subindex) {
                  if (quizState === QUIZ_STATE_HIDDEN) {
                    return obscured(line);
                  } else if (quizState === QUIZ_STATE_HINT) {
                    return hinted(line);
                  }
                } else {
                  return obscured(line);
                }
              })
              .join("\n")}
          </Text>
          <Stack style={style}>
            <Button
              disabled={
                subindex >= lines.length || quizState > QUIZ_STATE_HIDDEN
              }
              onClick={showHint}
            >
              Show Hint
            </Button>
            {subindex < lines.length && (
              <Button onClick={showAnswer}>Show Answer</Button>
            )}
            {subindex >= lines.length && <Button onClick={next}>Next</Button>}
          </Stack>
        </>
      )}
      {state === STATE_END && (
        <>
          <Text mb="2rem">
            Elapsed time:{" "}
            {Math.floor((endTime.getTime() - startTime.getTime()) / 60000)}m{" "}
            {Math.round(
              ((endTime.getTime() - startTime.getTime()) % 60000) / 1000,
            )}
            s
          </Text>
          <Stack style={style}>
            <Button onClick={start}>Restart</Button>
          </Stack>
        </>
      )}
    </Container>
  );
}

export default AssessmentMedical;
