import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { gradeSchema, type Grade } from "./grade.js";

export type Population = {
  total?: number;
  /** Share graded 10, percent */
  gemRate?: number | null;
  grades?: Grade[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const populationSchema: Schema<Population> = s.object<Population>(
  {
    total: s.optional(s.int()),
    gemRate: s.optionalNullable(s.float64()),
    grades: s.optional(s.array(s.lazy(() => gradeSchema))),
  },
  { additionalProperties: s.json() },
);
