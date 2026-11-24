import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { goalCompactSchema, type GoalCompact } from "./goal-compact.js";

export type GoalsResponse3 = {
  data?: GoalCompact[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const goalsResponse3Schema: Schema<GoalsResponse3> = s.object<GoalsResponse3>(
  {
    data: s.optional(s.array(s.lazy(() => goalCompactSchema))),
  },
  { additionalProperties: s.json() },
);
