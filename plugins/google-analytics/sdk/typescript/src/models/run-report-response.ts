import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dimensionHeaderSchema, type DimensionHeader } from "./dimension-header.js";
import { metricHeaderSchema, type MetricHeader } from "./metric-header.js";
import { propertyQuota1Schema, type PropertyQuota1 } from "./property-quota1.js";
import { responseMetaData2Schema, type ResponseMetaData2 } from "./response-meta-data2.js";
import { rowSchema, type Row } from "./row.js";

/** The response report table corresponding to a request. */
export type RunReportResponse = {
  /**
   * Identifies what kind of resource this message is. This `kind` is always the fixed string
   * "analyticsData#runReport". Useful to distinguish between response types in JSON.
   */
  kind?: string;
  /** This Google Analytics property's quota state including this request. */
  propertyQuota?: PropertyQuota1;
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
  /** If requested, the maximum values of metrics. */
  maximums?: Row[];
  /** If requested, the minimum values of metrics. */
  minimums?: Row[];
  /** Metadata for the report. */
  metadata?: ResponseMetaData2;
  /** Rows of dimension value combinations and metric values in the report. */
  rows?: Row[];
  /**
   * The total number of rows in the query result. `rowCount` is independent of the number of rows
   * returned in the response, the `limit` request parameter, and the `offset` request parameter.
   * For example if a query returns 175 rows and includes `limit` of 50 in the API request, the
   * response will contain `rowCount` of 175 but only 50 rows. To learn more about this pagination
   * parameter, see
   * [Pagination](https://developers.google.com/analytics/devguides/reporting/data/v1/basics#pagination).
   */
  rowCount?: number;
  /** If requested, the totaled values of metrics. */
  totals?: Row[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const runReportResponseSchema: Schema<RunReportResponse> = s.object<RunReportResponse>(
  {
    kind: s.optional(s.string()),
    propertyQuota: s.optional(s.lazy(() => propertyQuota1Schema)),
    metricHeaders: s.optional(s.array(s.lazy(() => metricHeaderSchema))),
    dimensionHeaders: s.optional(s.array(s.lazy(() => dimensionHeaderSchema))),
    maximums: s.optional(s.array(s.lazy(() => rowSchema))),
    minimums: s.optional(s.array(s.lazy(() => rowSchema))),
    metadata: s.optional(s.lazy(() => responseMetaData2Schema)),
    rows: s.optional(s.array(s.lazy(() => rowSchema))),
    rowCount: s.optional(s.int()),
    totals: s.optional(s.array(s.lazy(() => rowSchema))),
  },
  { additionalProperties: s.json() },
);
