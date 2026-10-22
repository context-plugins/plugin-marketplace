import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Enter account credentials manually, select a secret that references your credentials, or use
 * Google Application Default Credentials
 */
export const AuthenticationMethod3 = {
  Auto: "auto",
  Manual: "manual",
  Secret: "secret",
} as const;
export type AuthenticationMethod3 =
  | (typeof AuthenticationMethod3)[keyof typeof AuthenticationMethod3]
  | (string & {});

export const authenticationMethod3Schema: EnumSchema<AuthenticationMethod3> =
  s.enumOf<AuthenticationMethod3>(AuthenticationMethod3);
