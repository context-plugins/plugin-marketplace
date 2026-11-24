import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Text/operator used to filter metric values in metric filters (gt = greater than, lt = less than).
 */
export const MetricFilterText = {
  Gt: "gt",
  Lt: "lt",
} as const;
export type MetricFilterText = (typeof MetricFilterText)[keyof typeof MetricFilterText] | (string & {});

export const metricFilterTextSchema: EnumSchema<MetricFilterText> =
  s.enumOf<MetricFilterText>(MetricFilterText);
