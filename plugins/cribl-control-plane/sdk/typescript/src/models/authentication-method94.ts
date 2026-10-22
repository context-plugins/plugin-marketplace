import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Authentication method */
export const AuthenticationMethod94 = {
  Secret: "secret",
  ClientSecret: "clientSecret",
  ClientCert: "clientCert",
  ClientAssertion: "clientAssertion",
  ClientAssertionRpc: "clientAssertion_rpc",
} as const;
export type AuthenticationMethod94 =
  | (typeof AuthenticationMethod94)[keyof typeof AuthenticationMethod94]
  | (string & {});

export const authenticationMethod94Schema: EnumSchema<AuthenticationMethod94> =
  s.enumOf<AuthenticationMethod94>(AuthenticationMethod94);
