import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ScoreStatus = {
  Exempt: "exempt",
  FullyGraded: "fully graded",
  NotSubmitted: "not submitted",
  PartiallyGraded: "partially graded",
  Submitted: "submitted",
} as const;
export type ScoreStatus = (typeof ScoreStatus)[keyof typeof ScoreStatus] | (string & {});

export const scoreStatusSchema: EnumSchema<ScoreStatus> = s.enumOf<ScoreStatus>(ScoreStatus);
