import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Metrics related to SQL execution. */
export type SqlPlanMetric = {
  name?: string;
  metricType?: string;
  accumulatorId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sqlPlanMetricSchema: Schema<SqlPlanMetric> = s.object<SqlPlanMetric>(
  {
    name: s.optional(s.string()),
    metricType: s.optional(s.string()),
    accumulatorId: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
