import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const MetricsExplorerSource = {
  Authentication: "authentication",
  Authorization: "authorization",
  Monitoring: "monitoring",
} as const;
export type MetricsExplorerSource =
  | (typeof MetricsExplorerSource)[keyof typeof MetricsExplorerSource]
  | (string & {});

export const metricsExplorerSourceSchema: EnumSchema<MetricsExplorerSource> =
  s.enumOf<MetricsExplorerSource>(MetricsExplorerSource);
