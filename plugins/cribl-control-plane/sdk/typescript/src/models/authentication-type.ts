import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Remote Write authentication type */
export const AuthenticationType = {
  None: "none",
  Basic: "basic",
  CredentialsSecret: "credentialsSecret",
  Token: "token",
  TextSecret: "textSecret",
} as const;
export type AuthenticationType = (typeof AuthenticationType)[keyof typeof AuthenticationType] | (string & {});

export const authenticationTypeSchema: EnumSchema<AuthenticationType> =
  s.enumOf<AuthenticationType>(AuthenticationType);
