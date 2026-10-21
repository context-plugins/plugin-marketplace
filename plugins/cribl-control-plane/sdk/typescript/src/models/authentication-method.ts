import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** AWS authentication method. Choose Auto to use IAM roles. */
export const AuthenticationMethod = {
  Auto: "auto",
  Manual: "manual",
  Secret: "secret",
} as const;
export type AuthenticationMethod =
  | (typeof AuthenticationMethod)[keyof typeof AuthenticationMethod]
  | (string & {});

export const authenticationMethodSchema: EnumSchema<AuthenticationMethod> =
  s.enumOf<AuthenticationMethod>(AuthenticationMethod);
