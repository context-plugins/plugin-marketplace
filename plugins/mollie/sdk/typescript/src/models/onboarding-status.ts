import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The current status of the organization's onboarding process. */
export const OnboardingStatus = {
  NeedsData: "needs-data",
  InReview: "in-review",
  Completed: "completed",
} as const;
export type OnboardingStatus = (typeof OnboardingStatus)[keyof typeof OnboardingStatus] | (string & {});

export const onboardingStatusSchema: EnumSchema<OnboardingStatus> =
  s.enumOf<OnboardingStatus>(OnboardingStatus);
