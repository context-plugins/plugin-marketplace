import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Select Manual to enter an auth token directly, or select Secret to use a text secret to
 * authenticate
 */
export const AuthenticationMethod92 = {
  Manual: "manual",
  Secret: "secret",
} as const;
export type AuthenticationMethod92 =
  | (typeof AuthenticationMethod92)[keyof typeof AuthenticationMethod92]
  | (string & {});

export const authenticationMethod92Schema: EnumSchema<AuthenticationMethod92> =
  s.enumOf<AuthenticationMethod92>(AuthenticationMethod92);
