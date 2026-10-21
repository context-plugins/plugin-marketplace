import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Authentication method */
export const AuthenticationMethod59 = {
  Auto: "auto",
  Manual: "manual",
  Secret: "secret",
} as const;
export type AuthenticationMethod59 =
  | (typeof AuthenticationMethod59)[keyof typeof AuthenticationMethod59]
  | (string & {});

export const authenticationMethod59Schema: EnumSchema<AuthenticationMethod59> =
  s.enumOf<AuthenticationMethod59>(AuthenticationMethod59);
