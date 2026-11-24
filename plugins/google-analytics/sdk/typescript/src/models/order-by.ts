import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dimensionOrderBy2Schema, type DimensionOrderBy2 } from "./dimension-order-by2.js";
import { metricOrderBy2Schema, type MetricOrderBy2 } from "./metric-order-by2.js";
import { pivotOrderBy2Schema, type PivotOrderBy2 } from "./pivot-order-by2.js";

/**
 * Order bys define how rows will be sorted in the response. For example, ordering rows by
 * descending event count is one ordering, and ordering rows by the event name string is a different
 * ordering.
 */
export type OrderBy = {
  /** Sorts results by a metric's values within a pivot column group. */
  pivot?: PivotOrderBy2;
  /** If true, sorts by descending order. */
  desc?: boolean;
  /** Sorts results by a dimension's values. */
  dimension?: DimensionOrderBy2;
  /** Sorts results by a metric's values. */
  metric?: MetricOrderBy2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const orderBySchema: Schema<OrderBy> = s.object<OrderBy>(
  {
    pivot: s.optional(s.lazy(() => pivotOrderBy2Schema)),
    desc: s.optional(s.boolean()),
    dimension: s.optional(s.lazy(() => dimensionOrderBy2Schema)),
    metric: s.optional(s.lazy(() => metricOrderBy2Schema)),
  },
  { additionalProperties: s.json() },
);
