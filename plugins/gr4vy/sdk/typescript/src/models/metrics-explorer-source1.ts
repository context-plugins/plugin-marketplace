import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Source of the data */
export const MetricsExplorerSource1 = {
  Authentication: "authentication",
  Authorization: "authorization",
  Monitoring: "monitoring",
} as const;
export type MetricsExplorerSource1 =
  | (typeof MetricsExplorerSource1)[keyof typeof MetricsExplorerSource1]
  | (string & {});

export const metricsExplorerSource1Schema: EnumSchema<MetricsExplorerSource1> =
  s.enumOf<MetricsExplorerSource1>(MetricsExplorerSource1);
