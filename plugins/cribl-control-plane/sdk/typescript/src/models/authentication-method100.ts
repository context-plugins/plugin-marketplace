import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Enter API key directly, or select a stored secret */
export const AuthenticationMethod100 = {
  Manual: "manual",
  Secret: "secret",
} as const;
export type AuthenticationMethod100 =
  | (typeof AuthenticationMethod100)[keyof typeof AuthenticationMethod100]
  | (string & {});

export const authenticationMethod100Schema: EnumSchema<AuthenticationMethod100> =
  s.enumOf<AuthenticationMethod100>(AuthenticationMethod100);
