import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** OpenTelemetry authentication type */
export const AuthenticationType6 = {
  None: "none",
  Basic: "basic",
  CredentialsSecret: "credentialsSecret",
  Token: "token",
  TextSecret: "textSecret",
} as const;
export type AuthenticationType6 =
  | (typeof AuthenticationType6)[keyof typeof AuthenticationType6]
  | (string & {});

export const authenticationType6Schema: EnumSchema<AuthenticationType6> =
  s.enumOf<AuthenticationType6>(AuthenticationType6);
