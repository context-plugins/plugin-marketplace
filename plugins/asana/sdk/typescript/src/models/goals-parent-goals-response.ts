import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { goalCompactSchema, type GoalCompact } from "./goal-compact.js";

export type GoalsParentGoalsResponse = {
  data?: GoalCompact[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const goalsParentGoalsResponseSchema: Schema<GoalsParentGoalsResponse> =
  s.object<GoalsParentGoalsResponse>(
    {
      data: s.optional(s.array(s.lazy(() => goalCompactSchema))),
    },
    { additionalProperties: s.json() },
  );
