import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The source of the data. */
export const MetricsExplorerSource2 = {
  Authentication: "authentication",
  Authorization: "authorization",
  Monitoring: "monitoring",
} as const;
export type MetricsExplorerSource2 =
  | (typeof MetricsExplorerSource2)[keyof typeof MetricsExplorerSource2]
  | (string & {});

export const metricsExplorerSource2Schema: EnumSchema<MetricsExplorerSource2> =
  s.enumOf<MetricsExplorerSource2>(MetricsExplorerSource2);
