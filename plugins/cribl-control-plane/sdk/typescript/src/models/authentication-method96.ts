import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Enter password directly, or select a stored secret */
export const AuthenticationMethod96 = {
  Manual: "manual",
  Secret: "secret",
} as const;
export type AuthenticationMethod96 =
  | (typeof AuthenticationMethod96)[keyof typeof AuthenticationMethod96]
  | (string & {});

export const authenticationMethod96Schema: EnumSchema<AuthenticationMethod96> =
  s.enumOf<AuthenticationMethod96>(AuthenticationMethod96);
