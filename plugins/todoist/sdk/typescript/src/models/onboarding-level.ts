import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** User's self-reported skill level during onboarding */
export const OnboardingLevel = {
  Beginner: "beginner",
  Intermediate: "intermediate",
  Pro: "pro",
} as const;
export type OnboardingLevel = (typeof OnboardingLevel)[keyof typeof OnboardingLevel] | (string & {});

export const onboardingLevelSchema: EnumSchema<OnboardingLevel> = s.enumOf<OnboardingLevel>(OnboardingLevel);
