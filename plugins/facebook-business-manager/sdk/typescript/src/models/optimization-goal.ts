import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The optimization goal for ad delivery */
export const OptimizationGoal = {
  LinkClicks: "LINK_CLICKS",
  Impressions: "IMPRESSIONS",
  Reach: "REACH",
  LandingPageViews: "LANDING_PAGE_VIEWS",
  OffsiteConversions: "OFFSITE_CONVERSIONS",
  LeadGeneration: "LEAD_GENERATION",
  AppInstalls: "APP_INSTALLS",
  Value: "VALUE",
} as const;
export type OptimizationGoal = (typeof OptimizationGoal)[keyof typeof OptimizationGoal] | (string & {});

export const optimizationGoalSchema: EnumSchema<OptimizationGoal> =
  s.enumOf<OptimizationGoal>(OptimizationGoal);
