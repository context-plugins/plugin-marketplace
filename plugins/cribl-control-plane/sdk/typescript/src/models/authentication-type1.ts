import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Authentication type */
export const AuthenticationType1 = {
  None: "none",
  Basic: "basic",
  CredentialsSecret: "credentialsSecret",
  AuthTokens: "authTokens",
} as const;
export type AuthenticationType1 =
  | (typeof AuthenticationType1)[keyof typeof AuthenticationType1]
  | (string & {});

export const authenticationType1Schema: EnumSchema<AuthenticationType1> =
  s.enumOf<AuthenticationType1>(AuthenticationType1);
