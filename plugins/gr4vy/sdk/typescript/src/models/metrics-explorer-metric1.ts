import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The metric to calculate. */
export const MetricsExplorerMetric1 = {
  Volume: "volume",
  Transactions: "transactions",
  AuthRate: "auth_rate",
} as const;
export type MetricsExplorerMetric1 =
  | (typeof MetricsExplorerMetric1)[keyof typeof MetricsExplorerMetric1]
  | (string & {});

export const metricsExplorerMetric1Schema: EnumSchema<MetricsExplorerMetric1> =
  s.enumOf<MetricsExplorerMetric1>(MetricsExplorerMetric1);
