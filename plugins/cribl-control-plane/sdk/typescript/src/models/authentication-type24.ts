import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Splunk Search authentication type */
export const AuthenticationType24 = {
  None: "none",
  Basic: "basic",
  CredentialsSecret: "credentialsSecret",
  Token: "token",
  TextSecret: "textSecret",
} as const;
export type AuthenticationType24 =
  | (typeof AuthenticationType24)[keyof typeof AuthenticationType24]
  | (string & {});

export const authenticationType24Schema: EnumSchema<AuthenticationType24> =
  s.enumOf<AuthenticationType24>(AuthenticationType24);
