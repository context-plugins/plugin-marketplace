import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Authentication type */
export const AuthenticationType19 = {
  None: "none",
  CredentialsSecret: "credentialsSecret",
  TextSecret: "textSecret",
  OauthSecret: "oauthSecret",
} as const;
export type AuthenticationType19 =
  | (typeof AuthenticationType19)[keyof typeof AuthenticationType19]
  | (string & {});

export const authenticationType19Schema: EnumSchema<AuthenticationType19> =
  s.enumOf<AuthenticationType19>(AuthenticationType19);
