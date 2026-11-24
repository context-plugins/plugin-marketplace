import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { aggregationSchema, type Aggregation } from "./aggregation.js";
import { orderSchema, type Order } from "./order.js";

/** The optionally aggregated metric to query with its ordering. */
export type GoogleCloudApigeeV1MetricAggregation = {
  /**
   * Ordering for this aggregation in the result. For time series this is ignored since the ordering
   * of points depends only on the timestamp, not the values.
   */
  order?: Order;
  /** Aggregation function associated with the metric. */
  aggregation?: Aggregation;
  /** Name of the metric */
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1MetricAggregationSchema: Schema<GoogleCloudApigeeV1MetricAggregation> =
  s.object<GoogleCloudApigeeV1MetricAggregation>(
    {
      order: s.optional(s.lazy(() => orderSchema)),
      aggregation: s.optional(s.lazy(() => aggregationSchema)),
      name: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
