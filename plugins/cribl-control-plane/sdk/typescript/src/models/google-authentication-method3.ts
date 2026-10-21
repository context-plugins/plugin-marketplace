import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Choose Auto to use Google Application Default Credentials (ADC). Choose Secret to select or
 * create a stored secret that references Google service account credentials.
 */
export const GoogleAuthenticationMethod3 = {
  Auto: "auto",
  Secret: "secret",
} as const;
export type GoogleAuthenticationMethod3 =
  | (typeof GoogleAuthenticationMethod3)[keyof typeof GoogleAuthenticationMethod3]
  | (string & {});

export const googleAuthenticationMethod3Schema: EnumSchema<GoogleAuthenticationMethod3> =
  s.enumOf<GoogleAuthenticationMethod3>(GoogleAuthenticationMethod3);
