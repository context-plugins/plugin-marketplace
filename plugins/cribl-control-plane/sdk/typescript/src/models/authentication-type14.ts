import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Authentication type */
export const AuthenticationType14 = {
  None: "none",
  Basic: "basic",
  CredentialsSecret: "credentialsSecret",
  Token: "token",
  TextSecret: "textSecret",
  OauthSecret: "oauthSecret",
} as const;
export type AuthenticationType14 =
  | (typeof AuthenticationType14)[keyof typeof AuthenticationType14]
  | (string & {});

export const authenticationType14Schema: EnumSchema<AuthenticationType14> =
  s.enumOf<AuthenticationType14>(AuthenticationType14);
