import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Authentication method */
export const AuthenticationMethod58 = {
  Manual: "manual",
  Secret: "secret",
  ServiceAccount: "serviceAccount",
  ServiceAccountSecret: "serviceAccountSecret",
} as const;
export type AuthenticationMethod58 =
  | (typeof AuthenticationMethod58)[keyof typeof AuthenticationMethod58]
  | (string & {});

export const authenticationMethod58Schema: EnumSchema<AuthenticationMethod58> =
  s.enumOf<AuthenticationMethod58>(AuthenticationMethod58);
