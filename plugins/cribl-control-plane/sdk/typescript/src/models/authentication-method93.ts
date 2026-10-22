import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Authentication method */
export const AuthenticationMethod93 = {
  Manual: "manual",
  Secret: "secret",
  ClientSecret: "clientSecret",
  ClientCert: "clientCert",
  ClientAssertion: "clientAssertion",
  ClientAssertionRpc: "clientAssertion_rpc",
} as const;
export type AuthenticationMethod93 =
  | (typeof AuthenticationMethod93)[keyof typeof AuthenticationMethod93]
  | (string & {});

export const authenticationMethod93Schema: EnumSchema<AuthenticationMethod93> =
  s.enumOf<AuthenticationMethod93>(AuthenticationMethod93);
