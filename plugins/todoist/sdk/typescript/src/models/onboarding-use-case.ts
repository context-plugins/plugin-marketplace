import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const OnboardingUseCase = {
  Personal: "personal",
  Work: "work",
  Education: "education",
  Teamwork: "teamwork",
  Solo: "solo",
  Teamcreator: "teamcreator",
  Simple: "simple",
  Teamjoiner: "teamjoiner",
} as const;
export type OnboardingUseCase = (typeof OnboardingUseCase)[keyof typeof OnboardingUseCase] | (string & {});

export const onboardingUseCaseSchema: EnumSchema<OnboardingUseCase> =
  s.enumOf<OnboardingUseCase>(OnboardingUseCase);
