import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** User's onboarding persona selection */
export const OnboardingPersona = {
  Analog: "analog",
  Tasks: "tasks",
  Calendar: "calendar",
  Organic: "organic",
} as const;
export type OnboardingPersona = (typeof OnboardingPersona)[keyof typeof OnboardingPersona] | (string & {});

export const onboardingPersonaSchema: EnumSchema<OnboardingPersona> =
  s.enumOf<OnboardingPersona>(OnboardingPersona);
