import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** InfluxDB authentication type */
export const AuthenticationType10 = {
  None: "none",
  Basic: "basic",
  CredentialsSecret: "credentialsSecret",
  Token: "token",
  TextSecret: "textSecret",
} as const;
export type AuthenticationType10 =
  | (typeof AuthenticationType10)[keyof typeof AuthenticationType10]
  | (string & {});

export const authenticationType10Schema: EnumSchema<AuthenticationType10> =
  s.enumOf<AuthenticationType10>(AuthenticationType10);
