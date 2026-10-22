import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Loki logs authentication type */
export const AuthenticationType21 = {
  None: "none",
  Basic: "basic",
  CredentialsSecret: "credentialsSecret",
  Token: "token",
  TextSecret: "textSecret",
} as const;
export type AuthenticationType21 =
  | (typeof AuthenticationType21)[keyof typeof AuthenticationType21]
  | (string & {});

export const authenticationType21Schema: EnumSchema<AuthenticationType21> =
  s.enumOf<AuthenticationType21>(AuthenticationType21);
