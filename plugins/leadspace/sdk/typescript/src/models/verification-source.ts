import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const VerificationSource = {
  Social: "Social",
  Email: "Email",
  SocialEmail: "Social & Email",
} as const;
export type VerificationSource = (typeof VerificationSource)[keyof typeof VerificationSource] | (string & {});

export const verificationSourceSchema: EnumSchema<VerificationSource> =
  s.enumOf<VerificationSource>(VerificationSource);
