import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** High-level mobile-usability inspection result for this URL. */
export const Verdict = {
  VerdictUnspecified: "VERDICT_UNSPECIFIED",
  Pass: "PASS",
  Partial: "PARTIAL",
  Fail: "FAIL",
  Neutral: "NEUTRAL",
} as const;
export type Verdict = (typeof Verdict)[keyof typeof Verdict] | (string & {});

export const verdictSchema: EnumSchema<Verdict> = s.enumOf<Verdict>(Verdict);
