import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const OptimizationGoal1 = {
  LinkClicks: "LINK_CLICKS",
  Impressions: "IMPRESSIONS",
  Reach: "REACH",
  LandingPageViews: "LANDING_PAGE_VIEWS",
  OffsiteConversions: "OFFSITE_CONVERSIONS",
  LeadGeneration: "LEAD_GENERATION",
  AppInstalls: "APP_INSTALLS",
  Value: "VALUE",
} as const;
export type OptimizationGoal1 = (typeof OptimizationGoal1)[keyof typeof OptimizationGoal1] | (string & {});

export const optimizationGoal1Schema: EnumSchema<OptimizationGoal1> =
  s.enumOf<OptimizationGoal1>(OptimizationGoal1);
