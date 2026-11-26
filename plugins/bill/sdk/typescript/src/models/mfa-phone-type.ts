import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Response for MFA Phone Type. */
export const MfaPhoneType = {
  Mobile: "MOBILE",
  Home: "HOME",
  Work: "WORK",
} as const;
export type MfaPhoneType = (typeof MfaPhoneType)[keyof typeof MfaPhoneType] | (string & {});

export const mfaPhoneTypeSchema: EnumSchema<MfaPhoneType> = s.enumOf<MfaPhoneType>(MfaPhoneType);
