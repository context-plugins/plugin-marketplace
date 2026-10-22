import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Authentication method */
export const AuthenticationMethod98 = {
  Secret: "secret",
  Certificate: "certificate",
} as const;
export type AuthenticationMethod98 =
  | (typeof AuthenticationMethod98)[keyof typeof AuthenticationMethod98]
  | (string & {});

export const authenticationMethod98Schema: EnumSchema<AuthenticationMethod98> =
  s.enumOf<AuthenticationMethod98>(AuthenticationMethod98);
