import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Authentication method to use for the HTTP request */
export const AuthenticationType9 = {
  None: "none",
  Basic: "basic",
  CredentialsSecret: "credentialsSecret",
  Token: "token",
  TextSecret: "textSecret",
  Oauth: "oauth",
} as const;
export type AuthenticationType9 =
  | (typeof AuthenticationType9)[keyof typeof AuthenticationType9]
  | (string & {});

export const authenticationType9Schema: EnumSchema<AuthenticationType9> =
  s.enumOf<AuthenticationType9>(AuthenticationType9);
