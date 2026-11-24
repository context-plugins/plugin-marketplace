import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Specifies the registration status of the workflow types to list. */
export const RegistrationStatus2 = {
  Registered: "REGISTERED",
  Deprecated: "DEPRECATED",
} as const;
export type RegistrationStatus2 =
  | (typeof RegistrationStatus2)[keyof typeof RegistrationStatus2]
  | (string & {});

export const registrationStatus2Schema: EnumSchema<RegistrationStatus2> =
  s.enumOf<RegistrationStatus2>(RegistrationStatus2);
