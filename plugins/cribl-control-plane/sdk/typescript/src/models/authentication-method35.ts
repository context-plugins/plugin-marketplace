import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** How to authenticate incoming client connections */
export const AuthenticationMethod35 = {
  ClientCert: "clientCert",
  Kerberos: "kerberos",
  Negotiate: "negotiate",
} as const;
export type AuthenticationMethod35 =
  | (typeof AuthenticationMethod35)[keyof typeof AuthenticationMethod35]
  | (string & {});

export const authenticationMethod35Schema: EnumSchema<AuthenticationMethod35> =
  s.enumOf<AuthenticationMethod35>(AuthenticationMethod35);
