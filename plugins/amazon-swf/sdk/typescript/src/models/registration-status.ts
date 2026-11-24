import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Specifies the registration status of the activity types to list. */
export const RegistrationStatus = {
  Registered: "REGISTERED",
  Deprecated: "DEPRECATED",
} as const;
export type RegistrationStatus = (typeof RegistrationStatus)[keyof typeof RegistrationStatus] | (string & {});

export const registrationStatusSchema: EnumSchema<RegistrationStatus> =
  s.enumOf<RegistrationStatus>(RegistrationStatus);
