import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * High level verdict about whether the URL *is* indexed (indexed status), or *can be* indexed (live
 * inspection).
 */
export const Verdict1 = {
  VerdictUnspecified: "VERDICT_UNSPECIFIED",
  Pass: "PASS",
  Partial: "PARTIAL",
  Fail: "FAIL",
  Neutral: "NEUTRAL",
} as const;
export type Verdict1 = (typeof Verdict1)[keyof typeof Verdict1] | (string & {});

export const verdict1Schema: EnumSchema<Verdict1> = s.enumOf<Verdict1>(Verdict1);
