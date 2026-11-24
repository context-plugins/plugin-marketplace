import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { goalRequestSchema, type GoalRequest } from "./goal-request.js";

export type GoalsRequest = {
  data?: GoalRequest;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const goalsRequestSchema: Schema<GoalsRequest> = s.object<GoalsRequest>(
  {
    data: s.optional(s.lazy(() => goalRequestSchema)),
  },
  { additionalProperties: s.json() },
);
