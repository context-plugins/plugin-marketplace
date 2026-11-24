import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * hypothesis, test, evidence, finding, conclusion, recommendation, decision, risk, question or
 * action. A decision is recorded as a suggestion until a person confirms it
 */
export const Kind8 = {
  Hypothesis: "hypothesis",
  Test: "test",
  Evidence: "evidence",
  Finding: "finding",
  Conclusion: "conclusion",
  Recommendation: "recommendation",
  Decision: "decision",
  Risk: "risk",
  Question: "question",
  Action: "action",
} as const;
export type Kind8 = (typeof Kind8)[keyof typeof Kind8] | (string & {});

export const kind8Schema: EnumSchema<Kind8> = s.enumOf<Kind8>(Kind8);
