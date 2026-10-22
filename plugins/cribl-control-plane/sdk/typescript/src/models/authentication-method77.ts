import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Enter a token directly, or provide a secret referencing a token */
export const AuthenticationMethod77 = {
  Token: "token",
  Secret: "secret",
} as const;
export type AuthenticationMethod77 =
  | (typeof AuthenticationMethod77)[keyof typeof AuthenticationMethod77]
  | (string & {});

export const authenticationMethod77Schema: EnumSchema<AuthenticationMethod77> =
  s.enumOf<AuthenticationMethod77>(AuthenticationMethod77);
