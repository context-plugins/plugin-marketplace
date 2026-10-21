import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Enter workspace ID and workspace key directly, or select a stored secret */
export const AuthenticationMethod55 = {
  Manual: "manual",
  Secret: "secret",
} as const;
export type AuthenticationMethod55 =
  | (typeof AuthenticationMethod55)[keyof typeof AuthenticationMethod55]
  | (string & {});

export const authenticationMethod55Schema: EnumSchema<AuthenticationMethod55> =
  s.enumOf<AuthenticationMethod55>(AuthenticationMethod55);
