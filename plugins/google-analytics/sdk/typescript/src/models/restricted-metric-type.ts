import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const RestrictedMetricType = {
  RestrictedMetricTypeUnspecified: "RESTRICTED_METRIC_TYPE_UNSPECIFIED",
  CostData: "COST_DATA",
  RevenueData: "REVENUE_DATA",
} as const;
export type RestrictedMetricType =
  | (typeof RestrictedMetricType)[keyof typeof RestrictedMetricType]
  | (string & {});

export const restrictedMetricTypeSchema: EnumSchema<RestrictedMetricType> =
  s.enumOf<RestrictedMetricType>(RestrictedMetricType);
