import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { compatibilityFilterSchema, type CompatibilityFilter } from "./compatibility-filter.js";
import { dimensionSchema, type Dimension } from "./dimension.js";
import { filterExpression10Schema, type FilterExpression10 } from "./filter-expression10.js";
import { filterExpression9Schema, type FilterExpression9 } from "./filter-expression9.js";
import { metricSchema, type Metric } from "./metric.js";

/**
 * The request for compatibility information for a report's dimensions and metrics. Check
 * compatibility provides a preview of the compatibility of a report; fields shared with the
 * `runReport` request should be the same values as in your `runReport` request.
 */
export type CheckCompatibilityRequest = {
  /**
   * The metrics in this report. `metrics` should be the same value as in your `runReport` request.
   */
  metrics?: Metric[];
  /**
   * The filter clause of metrics. `metricFilter` should be the same value as in your `runReport`
   * request
   */
  metricFilter?: FilterExpression9;
  /**
   * Filters the dimensions and metrics in the response to just this compatibility. Commonly used as
   * `”compatibilityFilter”: “COMPATIBLE”` to only return compatible dimensions & metrics.
   */
  compatibilityFilter?: CompatibilityFilter;
  /**
   * The dimensions in this report. `dimensions` should be the same value as in your `runReport`
   * request.
   */
  dimensions?: Dimension[];
  /**
   * The filter clause of dimensions. `dimensionFilter` should be the same value as in your
   * `runReport` request.
   */
  dimensionFilter?: FilterExpression10;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const checkCompatibilityRequestSchema: Schema<CheckCompatibilityRequest> =
  s.object<CheckCompatibilityRequest>(
    {
      metrics: s.optional(s.array(s.lazy(() => metricSchema))),
      metricFilter: s.optional(s.lazy(() => filterExpression9Schema)),
      compatibilityFilter: s.optional(s.lazy(() => compatibilityFilterSchema)),
      dimensions: s.optional(s.array(s.lazy(() => dimensionSchema))),
      dimensionFilter: s.optional(s.lazy(() => filterExpression10Schema)),
    },
    { additionalProperties: s.json() },
  );
