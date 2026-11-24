import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { goalResponseSchema, type GoalResponse } from "./goal-response.js";

export type GoalsSetMetricCurrentValueResponse = {
  data?: GoalResponse;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const goalsSetMetricCurrentValueResponseSchema: Schema<GoalsSetMetricCurrentValueResponse> =
  s.object<GoalsSetMetricCurrentValueResponse>(
    {
      data: s.optional(s.lazy(() => goalResponseSchema)),
    },
    { additionalProperties: s.json() },
  );
