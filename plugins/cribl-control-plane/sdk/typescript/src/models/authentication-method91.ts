import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Enter credentials directly, or select a stored secret */
export const AuthenticationMethod91 = {
  Manual: "manual",
  Secret: "secret",
} as const;
export type AuthenticationMethod91 =
  | (typeof AuthenticationMethod91)[keyof typeof AuthenticationMethod91]
  | (string & {});

export const authenticationMethod91Schema: EnumSchema<AuthenticationMethod91> =
  s.enumOf<AuthenticationMethod91>(AuthenticationMethod91);
