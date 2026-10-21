import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of OAuth 2.0 client credentials grant flow to use */
export const AuthenticationMethod54 = {
  ClientSecret: "clientSecret",
  ClientTextSecret: "clientTextSecret",
  Certificate: "certificate",
} as const;
export type AuthenticationMethod54 =
  | (typeof AuthenticationMethod54)[keyof typeof AuthenticationMethod54]
  | (string & {});

export const authenticationMethod54Schema: EnumSchema<AuthenticationMethod54> =
  s.enumOf<AuthenticationMethod54>(AuthenticationMethod54);
