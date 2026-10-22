import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Authentication method to use when connecting to Redis. */
export const AuthenticationMethod104 = {
  None: "none",
  Manual: "manual",
  CredentialsSecret: "credentialsSecret",
  TextSecret: "textSecret",
} as const;
export type AuthenticationMethod104 =
  | (typeof AuthenticationMethod104)[keyof typeof AuthenticationMethod104]
  | (string & {});

export const authenticationMethod104Schema: EnumSchema<AuthenticationMethod104> =
  s.enumOf<AuthenticationMethod104>(AuthenticationMethod104);
