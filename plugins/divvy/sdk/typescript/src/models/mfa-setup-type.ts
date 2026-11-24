import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Enum for different ways to do mfa setup. */
export const MfaSetupType = {
  Voice: "VOICE",
  Text: "TEXT",
} as const;
export type MfaSetupType = (typeof MfaSetupType)[keyof typeof MfaSetupType] | (string & {});

export const mfaSetupTypeSchema: EnumSchema<MfaSetupType> = s.enumOf<MfaSetupType>(MfaSetupType);
