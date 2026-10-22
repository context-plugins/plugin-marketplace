import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Authentication method */
export const AuthenticationMethod79 = {
  ServiceAccount: "serviceAccount",
  ServiceAccountSecret: "serviceAccountSecret",
} as const;
export type AuthenticationMethod79 =
  | (typeof AuthenticationMethod79)[keyof typeof AuthenticationMethod79]
  | (string & {});

export const authenticationMethod79Schema: EnumSchema<AuthenticationMethod79> =
  s.enumOf<AuthenticationMethod79>(AuthenticationMethod79);
