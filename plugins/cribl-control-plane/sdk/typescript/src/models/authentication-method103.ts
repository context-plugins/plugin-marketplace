import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Authentication method. */
export const AuthenticationMethod103 = {
  Secret: "secret",
} as const;
export type AuthenticationMethod103 =
  | (typeof AuthenticationMethod103)[keyof typeof AuthenticationMethod103]
  | (string & {});

export const authenticationMethod103Schema: EnumSchema<AuthenticationMethod103> =
  s.enumOf<AuthenticationMethod103>(AuthenticationMethod103);
