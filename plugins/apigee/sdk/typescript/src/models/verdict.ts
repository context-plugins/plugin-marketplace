import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Output only. The resulting verdict of the canary evaluations: NONE, PASS, or FAIL. */
export const Verdict = {
  VerdictUnspecified: "VERDICT_UNSPECIFIED",
  None: "NONE",
  Fail: "FAIL",
  Pass: "PASS",
} as const;
export type Verdict = (typeof Verdict)[keyof typeof Verdict] | (string & {});

export const verdictSchema: EnumSchema<Verdict> = s.enumOf<Verdict>(Verdict);
