import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Authentication method. */
export const AuthenticationMethod88 = {
  Auto: "auto",
  Secret: "secret",
} as const;
export type AuthenticationMethod88 =
  | (typeof AuthenticationMethod88)[keyof typeof AuthenticationMethod88]
  | (string & {});

export const authenticationMethod88Schema: EnumSchema<AuthenticationMethod88> =
  s.enumOf<AuthenticationMethod88>(AuthenticationMethod88);
