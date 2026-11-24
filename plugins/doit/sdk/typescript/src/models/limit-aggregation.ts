import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Controls how rows excluded by limits are rendered. Applies when any limit type is active
 * (`metricFilter`, `limitByChange`, or a `group` entry with a `limit`). A report may configure at
 * most two of those three limit types — not all three. When `displayValues` is not `actuals_only`,
 * this field must be `none` (or omitted, which defaults to `none`).
 */
export const LimitAggregation = {
  None: "none",
  Top: "top",
  All: "all",
} as const;
export type LimitAggregation = (typeof LimitAggregation)[keyof typeof LimitAggregation] | (string & {});

export const limitAggregationSchema: EnumSchema<LimitAggregation> =
  s.enumOf<LimitAggregation>(LimitAggregation);
