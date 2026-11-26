import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const MfaStatus = {
  Disabled: "DISABLED",
  Setup: "SETUP",
  Challenge: "CHALLENGE",
  Complete: "COMPLETE",
  Undefined: "UNDEFINED",
} as const;
export type MfaStatus = (typeof MfaStatus)[keyof typeof MfaStatus] | (string & {});

export const mfaStatusSchema: EnumSchema<MfaStatus> = s.enumOf<MfaStatus>(MfaStatus);
