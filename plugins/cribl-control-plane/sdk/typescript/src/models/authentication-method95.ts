import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Enter client secret directly, or select a stored secret */
export const AuthenticationMethod95 = {
  Manual: "manual",
  Secret: "secret",
} as const;
export type AuthenticationMethod95 =
  | (typeof AuthenticationMethod95)[keyof typeof AuthenticationMethod95]
  | (string & {});

export const authenticationMethod95Schema: EnumSchema<AuthenticationMethod95> =
  s.enumOf<AuthenticationMethod95>(AuthenticationMethod95);
