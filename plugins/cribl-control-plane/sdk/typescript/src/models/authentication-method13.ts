import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Enter credentials directly, or select a stored secret */
export const AuthenticationMethod13 = {
  None: "none",
  Manual: "manual",
  Secret: "secret",
} as const;
export type AuthenticationMethod13 =
  | (typeof AuthenticationMethod13)[keyof typeof AuthenticationMethod13]
  | (string & {});

export const authenticationMethod13Schema: EnumSchema<AuthenticationMethod13> =
  s.enumOf<AuthenticationMethod13>(AuthenticationMethod13);
