import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Select Secret to use a text secret to authenticate */
export const AuthenticationMethod99 = {
  Secret: "secret",
} as const;
export type AuthenticationMethod99 =
  | (typeof AuthenticationMethod99)[keyof typeof AuthenticationMethod99]
  | (string & {});

export const authenticationMethod99Schema: EnumSchema<AuthenticationMethod99> =
  s.enumOf<AuthenticationMethod99>(AuthenticationMethod99);
