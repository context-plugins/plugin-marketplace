import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Choose Auto to use Google Application Default Credentials (ADC), or Secret to select or create a
 * stored secret that references Google service account credentials
 */
export const GoogleAuthenticationMethod1 = {
  Auto: "auto",
  Secret: "secret",
} as const;
export type GoogleAuthenticationMethod1 =
  | (typeof GoogleAuthenticationMethod1)[keyof typeof GoogleAuthenticationMethod1]
  | (string & {});

export const googleAuthenticationMethod1Schema: EnumSchema<GoogleAuthenticationMethod1> =
  s.enumOf<GoogleAuthenticationMethod1>(GoogleAuthenticationMethod1);
