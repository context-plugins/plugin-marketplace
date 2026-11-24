import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dimensionHeaderSchema, type DimensionHeader } from "./dimension-header.js";
import { metricHeaderSchema, type MetricHeader } from "./metric-header.js";
import { propertyQuota3Schema, type PropertyQuota3 } from "./property-quota3.js";
import { rowSchema, type Row } from "./row.js";

/** The response realtime report table corresponding to a request. */
export type RunRealtimeReportResponse = {
  /**
   * The total number of rows in the query result. `rowCount` is independent of the number of rows
   * returned in the response and the `limit` request parameter. For example if a query returns 175
   * rows and includes `limit` of 50 in the API request, the response will contain `rowCount` of 175
   * but only 50 rows.
   */
  rowCount?: number;
  /**
   * Identifies what kind of resource this message is. This `kind` is always the fixed string
   * "analyticsData#runRealtimeReport". Useful to distinguish between response types in JSON.
   */
  kind?: string;
  /** If requested, the totaled values of metrics. */
  totals?: Row[];
  /** This Google Analytics property's Realtime quota state including this request. */
  propertyQuota?: PropertyQuota3;
  /**
   * Describes metric columns. The number of MetricHeaders and ordering of MetricHeaders matches the
   * metrics present in rows.
   */
  metricHeaders?: MetricHeader[];
  /**
   * Describes dimension columns. The number of DimensionHeaders and ordering of DimensionHeaders
   * matches the dimensions present in rows.
   */
  dimensionHeaders?: DimensionHeader[];
  /** Rows of dimension value combinations and metric values in the report. */
  rows?: Row[];
  /** If requested, the maximum values of metrics. */
  maximums?: Row[];
  /** If requested, the minimum values of metrics. */
  minimums?: Row[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const runRealtimeReportResponseSchema: Schema<RunRealtimeReportResponse> =
  s.object<RunRealtimeReportResponse>(
    {
      rowCount: s.optional(s.int()),
      kind: s.optional(s.string()),
      totals: s.optional(s.array(s.lazy(() => rowSchema))),
      propertyQuota: s.optional(s.lazy(() => propertyQuota3Schema)),
      metricHeaders: s.optional(s.array(s.lazy(() => metricHeaderSchema))),
      dimensionHeaders: s.optional(s.array(s.lazy(() => dimensionHeaderSchema))),
      rows: s.optional(s.array(s.lazy(() => rowSchema))),
      maximums: s.optional(s.array(s.lazy(() => rowSchema))),
      minimums: s.optional(s.array(s.lazy(() => rowSchema))),
    },
    { additionalProperties: s.json() },
  );
