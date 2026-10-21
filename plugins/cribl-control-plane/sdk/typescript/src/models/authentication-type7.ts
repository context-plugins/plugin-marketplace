import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Authentication type */
export const AuthenticationType7 = {
  Token: "token",
  TokenSecret: "tokenSecret",
  Basic: "basic",
  BasicSecret: "basicSecret",
  Oauth: "oauth",
} as const;
export type AuthenticationType7 =
  | (typeof AuthenticationType7)[keyof typeof AuthenticationType7]
  | (string & {});

export const authenticationType7Schema: EnumSchema<AuthenticationType7> =
  s.enumOf<AuthenticationType7>(AuthenticationType7);
