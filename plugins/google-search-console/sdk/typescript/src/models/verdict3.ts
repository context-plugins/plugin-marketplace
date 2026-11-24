import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** High-level rich results inspection result for this URL. */
export const Verdict3 = {
  VerdictUnspecified: "VERDICT_UNSPECIFIED",
  Pass: "PASS",
  Partial: "PARTIAL",
  Fail: "FAIL",
  Neutral: "NEUTRAL",
} as const;
export type Verdict3 = (typeof Verdict3)[keyof typeof Verdict3] | (string & {});

export const verdict3Schema: EnumSchema<Verdict3> = s.enumOf<Verdict3>(Verdict3);
