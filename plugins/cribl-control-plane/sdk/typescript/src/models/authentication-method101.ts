import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Enter credentials directly, or select a stored secret */
export const AuthenticationMethod101 = {
  Manual: "manual",
  Secret: "secret",
  ManualApiKey: "manualAPIKey",
  TextSecret: "textSecret",
} as const;
export type AuthenticationMethod101 =
  | (typeof AuthenticationMethod101)[keyof typeof AuthenticationMethod101]
  | (string & {});

export const authenticationMethod101Schema: EnumSchema<AuthenticationMethod101> =
  s.enumOf<AuthenticationMethod101>(AuthenticationMethod101);
