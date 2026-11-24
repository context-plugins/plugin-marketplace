import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Specifies the registration status of the domains to list. */
export const RegistrationStatus1 = {
  Registered: "REGISTERED",
  Deprecated: "DEPRECATED",
} as const;
export type RegistrationStatus1 =
  | (typeof RegistrationStatus1)[keyof typeof RegistrationStatus1]
  | (string & {});

export const registrationStatus1Schema: EnumSchema<RegistrationStatus1> =
  s.enumOf<RegistrationStatus1>(RegistrationStatus1);
