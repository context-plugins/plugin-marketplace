import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The metric type to determine auto-scaling. */
export const MetricType = {
  FleetUtilizationRate: "FLEET_UTILIZATION_RATE",
} as const;
export type MetricType = (typeof MetricType)[keyof typeof MetricType] | (string & {});

export const metricTypeSchema: EnumSchema<MetricType> = s.enumOf<MetricType>(MetricType);
