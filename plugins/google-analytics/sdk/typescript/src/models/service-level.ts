import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Output only. The Google Analytics service level that applies to this property. */
export const ServiceLevel = {
  ServiceLevelUnspecified: "SERVICE_LEVEL_UNSPECIFIED",
  GoogleAnalyticsStandard: "GOOGLE_ANALYTICS_STANDARD",
  GoogleAnalytics360: "GOOGLE_ANALYTICS_360",
} as const;
export type ServiceLevel = (typeof ServiceLevel)[keyof typeof ServiceLevel] | (string & {});

export const serviceLevelSchema: EnumSchema<ServiceLevel> = s.enumOf<ServiceLevel>(ServiceLevel);
