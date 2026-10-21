import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Authentication method */
export const AuthenticationMethod97 = {
  Manual: "manual",
  Secret: "secret",
  Certificate: "certificate",
} as const;
export type AuthenticationMethod97 =
  | (typeof AuthenticationMethod97)[keyof typeof AuthenticationMethod97]
  | (string & {});

export const authenticationMethod97Schema: EnumSchema<AuthenticationMethod97> =
  s.enumOf<AuthenticationMethod97>(AuthenticationMethod97);
