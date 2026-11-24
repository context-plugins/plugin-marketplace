import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dimensionValueSchema, type DimensionValue } from "./dimension-value.js";
import { metricValueSchema, type MetricValue } from "./metric-value.js";

/**
 * Report data for each row. For example if RunReportRequest contains: ```none "dimensions": [ {
 * "name": "eventName" }, { "name": "countryId" } ], "metrics": [ { "name": "eventCount" } ] ``` One
 * row with 'in_app_purchase' as the eventName, 'JP' as the countryId, and 15 as the eventCount,
 * would be: ```none "dimensionValues": [ { "value": "in_app_purchase" }, { "value": "JP" } ],
 * "metricValues": [ { "value": "15" } ] ```
 */
export type Row = {
  /**
   * List of requested dimension values. In a PivotReport, dimension_values are only listed for
   * dimensions included in a pivot.
   */
  dimensionValues?: DimensionValue[];
  /** List of requested visible metric values. */
  metricValues?: MetricValue[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const rowSchema: Schema<Row> = s.object<Row>(
  {
    dimensionValues: s.optional(s.array(s.lazy(() => dimensionValueSchema))),
    metricValues: s.optional(s.array(s.lazy(() => metricValueSchema))),
  },
  { additionalProperties: s.json() },
);
