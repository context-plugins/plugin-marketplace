import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Enter credentials directly, or select a stored secret */
export const AuthenticationMethod16 = {
  Manual: "manual",
  Secret: "secret",
  Kubernetes: "kubernetes",
} as const;
export type AuthenticationMethod16 =
  | (typeof AuthenticationMethod16)[keyof typeof AuthenticationMethod16]
  | (string & {});

export const authenticationMethod16Schema: EnumSchema<AuthenticationMethod16> =
  s.enumOf<AuthenticationMethod16>(AuthenticationMethod16);
