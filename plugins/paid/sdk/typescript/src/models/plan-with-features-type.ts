import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of plan (flat for fixed pricing, usage for usage-based, credit for prepaid credits) */
export const PlanWithFeaturesType = {
  Flat: "flat",
  Usage: "usage",
  Credit: "credit",
} as const;
export type PlanWithFeaturesType =
  | (typeof PlanWithFeaturesType)[keyof typeof PlanWithFeaturesType]
  | (string & {});

export const planWithFeaturesTypeSchema: EnumSchema<PlanWithFeaturesType> =
  s.enumOf<PlanWithFeaturesType>(PlanWithFeaturesType);
