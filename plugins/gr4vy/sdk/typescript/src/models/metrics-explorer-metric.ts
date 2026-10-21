import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const MetricsExplorerMetric = {
  Volume: "volume",
  Transactions: "transactions",
  AuthRate: "auth_rate",
} as const;
export type MetricsExplorerMetric =
  | (typeof MetricsExplorerMetric)[keyof typeof MetricsExplorerMetric]
  | (string & {});

export const metricsExplorerMetricSchema: EnumSchema<MetricsExplorerMetric> =
  s.enumOf<MetricsExplorerMetric>(MetricsExplorerMetric);
