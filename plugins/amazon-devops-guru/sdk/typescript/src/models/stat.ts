import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of statistic associated with the CloudWatch metric. For more information, see Statistics
 * in the Amazon CloudWatch User Guide.
 */
export const Stat = {
  Sum: "Sum",
  Average: "Average",
  SampleCount: "SampleCount",
  Minimum: "Minimum",
  Maximum: "Maximum",
  P99: "p99",
  P90: "p90",
  P50: "p50",
} as const;
export type Stat = (typeof Stat)[keyof typeof Stat] | (string & {});

export const statSchema: EnumSchema<Stat> = s.enumOf<Stat>(Stat);
