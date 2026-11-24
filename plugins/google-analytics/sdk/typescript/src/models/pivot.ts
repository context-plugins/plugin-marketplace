import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { metricAggregationSchema, type MetricAggregation } from "./metric-aggregation.js";
import { orderBySchema, type OrderBy } from "./order-by.js";

/** Describes the visible dimension columns and rows in the report response. */
export type Pivot = {
  /**
   * Specifies how dimensions are ordered in the pivot. In the first Pivot, the OrderBys determine
   * Row and PivotDimensionHeader ordering; in subsequent Pivots, the OrderBys determine only
   * PivotDimensionHeader ordering. Dimensions specified in these OrderBys must be a subset of
   * Pivot.field_names.
   */
  orderBys?: OrderBy[];
  /** Aggregate the metrics by dimensions in this pivot using the specified metric_aggregations. */
  metricAggregations?: MetricAggregation[];
  /**
   * Dimension names for visible columns in the report response. Including "dateRange" produces a
   * date range column; for each row in the response, dimension values in the date range column will
   * indicate the corresponding date range from the request.
   */
  fieldNames?: string[];
  /**
   * The number of unique combinations of dimension values to return in this pivot. The `limit`
   * parameter is required. A `limit` of 10,000 is common for single pivot requests. The product of
   * the `limit` for each `pivot` in a `RunPivotReportRequest` must not exceed 250,000. For example,
   * a two pivot request with `limit: 1000` in each pivot will fail because the product is
   * `1,000,000`.
   */
  limit?: string;
  /** The row count of the start row. The first row is counted as row 0. */
  offset?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pivotSchema: Schema<Pivot> = s.object<Pivot>(
  {
    orderBys: s.optional(s.array(s.lazy(() => orderBySchema))),
    metricAggregations: s.optional(s.array(s.lazy(() => metricAggregationSchema))),
    fieldNames: s.optional(s.array(s.string())),
    limit: s.optional(s.string()),
    offset: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
