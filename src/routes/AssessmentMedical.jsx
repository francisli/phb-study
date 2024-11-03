import { useState } from "react";
import { Button, Container, Stack, Text, Title } from "@mantine/core";

import STATES from "./AssessmentMedical.json";
import Quiz from "../components/Quiz";

function AssessmentMedical() {
  return <Quiz title="Patient Assessment - Medical - Pain" states={STATES} />;
}

export default AssessmentMedical;
