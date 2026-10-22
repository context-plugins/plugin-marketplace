import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Authentication type */
export const AuthenticationType18 = {
  Token: "token",
  TextSecret: "textSecret",
} as const;
export type AuthenticationType18 =
  | (typeof AuthenticationType18)[keyof typeof AuthenticationType18]
  | (string & {});

export const authenticationType18Schema: EnumSchema<AuthenticationType18> =
  s.enumOf<AuthenticationType18>(AuthenticationType18);
