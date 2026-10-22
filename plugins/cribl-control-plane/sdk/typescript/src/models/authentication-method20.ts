import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Select authentication method. */
export const AuthenticationMethod20 = {
  Manual: "manual",
  Secret: "secret",
  Oauth: "oauth",
  OauthSecret: "oauthSecret",
  OauthCert: "oauthCert",
} as const;
export type AuthenticationMethod20 =
  | (typeof AuthenticationMethod20)[keyof typeof AuthenticationMethod20]
  | (string & {});

export const authenticationMethod20Schema: EnumSchema<AuthenticationMethod20> =
  s.enumOf<AuthenticationMethod20>(AuthenticationMethod20);
