import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dimensionHeaderSchema, type DimensionHeader } from "./dimension-header.js";
import { metricHeaderSchema, type MetricHeader } from "./metric-header.js";
import { pivotHeaderSchema, type PivotHeader } from "./pivot-header.js";
import { propertyQuota1Schema, type PropertyQuota1 } from "./property-quota1.js";
import { responseMetaData2Schema, type ResponseMetaData2 } from "./response-meta-data2.js";
import { rowSchema, type Row } from "./row.js";

/** The response pivot report table corresponding to a pivot request. */
export type RunPivotReportResponse = {
  /**
   * Describes dimension columns. The number of DimensionHeaders and ordering of DimensionHeaders
   * matches the dimensions present in rows.
   */
  dimensionHeaders?: DimensionHeader[];
  /** Rows of dimension value combinations and metric values in the report. */
  rows?: Row[];
  /**
   * Identifies what kind of resource this message is. This `kind` is always the fixed string
   * "analyticsData#runPivotReport". Useful to distinguish between response types in JSON.
   */
  kind?: string;
  /**
   * Describes metric columns. The number of MetricHeaders and ordering of MetricHeaders matches the
   * metrics present in rows.
   */
  metricHeaders?: MetricHeader[];
  /**
   * Summarizes the columns and rows created by a pivot. Each pivot in the request produces one
   * header in the response. If we have a request like this: "pivots": [{ "fieldNames": ["country",
   * "city"] }, { "fieldNames": "eventName" }] We will have the following `pivotHeaders` in the
   * response: "pivotHeaders" : [{ "dimensionHeaders": [{ "dimensionValues": [ { "value": "United
   * Kingdom" }, { "value": "London" } ] }, { "dimensionValues": [ { "value": "Japan" }, { "value":
   * "Osaka" } ] }] }, { "dimensionHeaders": [{ "dimensionValues": [{ "value": "session_start" }] },
   * { "dimensionValues": [{ "value": "scroll" }] }] }]
   */
  pivotHeaders?: PivotHeader[];
  /**
   * Aggregation of metric values. Can be totals, minimums, or maximums. The returned aggregations
   * are controlled by the metric_aggregations in the pivot. The type of aggregation returned in
   * each row is shown by the dimension_values which are set to "RESERVED_".
   */
  aggregates?: Row[];
  /** This Google Analytics property's quota state including this request. */
  propertyQuota?: PropertyQuota1;
  /** Metadata for the report. */
  metadata?: ResponseMetaData2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const runPivotReportResponseSchema: Schema<RunPivotReportResponse> = s.object<RunPivotReportResponse>(
  {
    dimensionHeaders: s.optional(s.array(s.lazy(() => dimensionHeaderSchema))),
    rows: s.optional(s.array(s.lazy(() => rowSchema))),
    kind: s.optional(s.string()),
    metricHeaders: s.optional(s.array(s.lazy(() => metricHeaderSchema))),
    pivotHeaders: s.optional(s.array(s.lazy(() => pivotHeaderSchema))),
    aggregates: s.optional(s.array(s.lazy(() => rowSchema))),
    propertyQuota: s.optional(s.lazy(() => propertyQuota1Schema)),
    metadata: s.optional(s.lazy(() => responseMetaData2Schema)),
  },
  { additionalProperties: s.json() },
);
