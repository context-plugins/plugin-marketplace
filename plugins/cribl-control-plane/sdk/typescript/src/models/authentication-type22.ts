import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Authentication type */
export const AuthenticationType22 = {
  None: "none",
  Token: "token",
  TextSecret: "textSecret",
  Basic: "basic",
  CredentialsSecret: "credentialsSecret",
} as const;
export type AuthenticationType22 =
  | (typeof AuthenticationType22)[keyof typeof AuthenticationType22]
  | (string & {});

export const authenticationType22Schema: EnumSchema<AuthenticationType22> =
  s.enumOf<AuthenticationType22>(AuthenticationType22);
