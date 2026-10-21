import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Select authentication method. */
export const AuthenticationMethod42 = {
  OauthSecret: "oauthSecret",
  OauthCert: "oauthCert",
} as const;
export type AuthenticationMethod42 =
  | (typeof AuthenticationMethod42)[keyof typeof AuthenticationMethod42]
  | (string & {});

export const authenticationMethod42Schema: EnumSchema<AuthenticationMethod42> =
  s.enumOf<AuthenticationMethod42>(AuthenticationMethod42);
