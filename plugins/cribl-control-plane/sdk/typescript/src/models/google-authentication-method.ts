import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Choose Auto to use Google Application Default Credentials (ADC), Manual to enter Google service
 * account credentials directly, or Secret to select or create a stored secret that references
 * Google service account credentials.
 */
export const GoogleAuthenticationMethod = {
  Auto: "auto",
  Manual: "manual",
  Secret: "secret",
} as const;
export type GoogleAuthenticationMethod =
  | (typeof GoogleAuthenticationMethod)[keyof typeof GoogleAuthenticationMethod]
  | (string & {});

export const googleAuthenticationMethodSchema: EnumSchema<GoogleAuthenticationMethod> =
  s.enumOf<GoogleAuthenticationMethod>(GoogleAuthenticationMethod);
