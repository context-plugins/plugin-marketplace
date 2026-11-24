import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Sorts results by a metric's values. */
export type MetricOrderBy2 = {
  /** A metric name in the request to order by. */
  metricName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const metricOrderBy2Schema: Schema<MetricOrderBy2> = s.object<MetricOrderBy2>(
  {
    metricName: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
