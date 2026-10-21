import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Issue = {
  AgentCanvasFailed: "AGENT_CANVAS_FAILED",
  AgentClarifyingQuestions: "AGENT_CLARIFYING_QUESTIONS",
  AgentIntermediateStepsFailed: "AGENT_INTERMEDIATE_STEPS_FAILED",
  AgentToolCallFailed: "AGENT_TOOL_CALL_FAILED",
  InaccurateResponse: "INACCURATE_RESPONSE",
  IncompleteOrNoAnswer: "INCOMPLETE_OR_NO_ANSWER",
  IncorrectCitation: "INCORRECT_CITATION",
  MissingCitation: "MISSING_CITATION",
  Other: "OTHER",
  OutdatedResponse: "OUTDATED_RESPONSE",
  ResultMissing: "RESULT_MISSING",
  ResultShouldNotAppear: "RESULT_SHOULD_NOT_APPEAR",
  ResultsHelpful: "RESULTS_HELPFUL",
  ResultsPoorOrder: "RESULTS_POOR_ORDER",
  TooMuchOneKind: "TOO_MUCH_ONE_KIND",
  NotAQuestion: "NOT_A_QUESTION",
  UnsureIfCorrect: "UNSURE_IF_CORRECT",
} as const;
export type Issue = (typeof Issue)[keyof typeof Issue] | (string & {});

export const issueSchema: EnumSchema<Issue> = s.enumOf<Issue>(Issue);
