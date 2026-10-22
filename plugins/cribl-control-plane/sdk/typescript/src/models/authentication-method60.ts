import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Authentication method */
export const AuthenticationMethod60 = {
  Manual: "manual",
  Secret: "secret",
} as const;
export type AuthenticationMethod60 =
  | (typeof AuthenticationMethod60)[keyof typeof AuthenticationMethod60]
  | (string & {});

export const authenticationMethod60Schema: EnumSchema<AuthenticationMethod60> =
  s.enumOf<AuthenticationMethod60>(AuthenticationMethod60);
