import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** AWS authentication method. Choose Auto to use IAM roles. */
export const AuthenticationMethod102 = {
  Auto: "auto",
  Secret: "secret",
} as const;
export type AuthenticationMethod102 =
  | (typeof AuthenticationMethod102)[keyof typeof AuthenticationMethod102]
  | (string & {});

export const authenticationMethod102Schema: EnumSchema<AuthenticationMethod102> =
  s.enumOf<AuthenticationMethod102>(AuthenticationMethod102);
