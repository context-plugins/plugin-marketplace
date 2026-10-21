import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Select authentication method. */
export const AuthenticationMethod21 = {
  Oauth: "oauth",
  OauthSecret: "oauthSecret",
  OauthCert: "oauthCert",
} as const;
export type AuthenticationMethod21 =
  | (typeof AuthenticationMethod21)[keyof typeof AuthenticationMethod21]
  | (string & {});

export const authenticationMethod21Schema: EnumSchema<AuthenticationMethod21> =
  s.enumOf<AuthenticationMethod21>(AuthenticationMethod21);
