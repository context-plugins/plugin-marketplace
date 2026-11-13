import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** User's role selection during onboarding */
export const OnboardingRole = {
  Leader: "leader",
  Founder: "founder",
  Ic: "ic",
} as const;
export type OnboardingRole = (typeof OnboardingRole)[keyof typeof OnboardingRole] | (string & {});

export const onboardingRoleSchema: EnumSchema<OnboardingRole> = s.enumOf<OnboardingRole>(OnboardingRole);
