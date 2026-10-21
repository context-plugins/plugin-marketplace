import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Remote Write authentication type */
export const AuthenticationType13 = {
  None: "none",
  Basic: "basic",
  CredentialsSecret: "credentialsSecret",
  Token: "token",
  TextSecret: "textSecret",
  AwsSigv4: "aws_sigv4",
} as const;
export type AuthenticationType13 =
  | (typeof AuthenticationType13)[keyof typeof AuthenticationType13]
  | (string & {});

export const authenticationType13Schema: EnumSchema<AuthenticationType13> =
  s.enumOf<AuthenticationType13>(AuthenticationType13);
