import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Enter authentication data directly, or select a secret referencing your auth data */
export const AuthenticationMethod1 = {
  Manual: "manual",
  Secret: "secret",
  ClientSecret: "clientSecret",
  ClientCert: "clientCert",
} as const;
export type AuthenticationMethod1 =
  | (typeof AuthenticationMethod1)[keyof typeof AuthenticationMethod1]
  | (string & {});

export const authenticationMethod1Schema: EnumSchema<AuthenticationMethod1> =
  s.enumOf<AuthenticationMethod1>(AuthenticationMethod1);
