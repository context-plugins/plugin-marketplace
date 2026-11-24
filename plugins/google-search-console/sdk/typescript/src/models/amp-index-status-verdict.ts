import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Index status of the AMP URL. */
export const AmpIndexStatusVerdict = {
  VerdictUnspecified: "VERDICT_UNSPECIFIED",
  Pass: "PASS",
  Partial: "PARTIAL",
  Fail: "FAIL",
  Neutral: "NEUTRAL",
} as const;
export type AmpIndexStatusVerdict =
  | (typeof AmpIndexStatusVerdict)[keyof typeof AmpIndexStatusVerdict]
  | (string & {});

export const ampIndexStatusVerdictSchema: EnumSchema<AmpIndexStatusVerdict> =
  s.enumOf<AmpIndexStatusVerdict>(AmpIndexStatusVerdict);
