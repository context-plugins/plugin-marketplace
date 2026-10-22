import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CapabilityStatusReason = {
  RequirementPastDue: "requirement-past-due",
  OnboardingInformationNeeded: "onboarding-information-needed",
} as const;
export type CapabilityStatusReason =
  | (typeof CapabilityStatusReason)[keyof typeof CapabilityStatusReason]
  | (string & {});

export const capabilityStatusReasonSchema: EnumSchema<CapabilityStatusReason> =
  s.enumOf<CapabilityStatusReason>(CapabilityStatusReason);
