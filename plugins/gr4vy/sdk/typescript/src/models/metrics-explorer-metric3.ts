import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The metric to be calculated */
export const MetricsExplorerMetric3 = {
  Volume: "volume",
  Transactions: "transactions",
  AuthRate: "auth_rate",
} as const;
export type MetricsExplorerMetric3 =
  | (typeof MetricsExplorerMetric3)[keyof typeof MetricsExplorerMetric3]
  | (string & {});

export const metricsExplorerMetric3Schema: EnumSchema<MetricsExplorerMetric3> =
  s.enumOf<MetricsExplorerMetric3>(MetricsExplorerMetric3);
