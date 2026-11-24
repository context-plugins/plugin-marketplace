import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { goalMetricRequestSchema, type GoalMetricRequest } from "./goal-metric-request.js";

export type GoalsSetMetricRequest = {
  data?: GoalMetricRequest;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const goalsSetMetricRequestSchema: Schema<GoalsSetMetricRequest> = s.object<GoalsSetMetricRequest>(
  {
    data: s.optional(s.lazy(() => goalMetricRequestSchema)),
  },
  { additionalProperties: s.json() },
);
