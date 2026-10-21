import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Onboarding status */
export const OnBoardingStatus = {
  Configured: "configured",
  NotConfigured: "notConfigured",
  Skipped: "skipped",
} as const;
export type OnBoardingStatus = (typeof OnBoardingStatus)[keyof typeof OnBoardingStatus] | (string & {});

export const onBoardingStatusSchema: EnumSchema<OnBoardingStatus> =
  s.enumOf<OnBoardingStatus>(OnBoardingStatus);
