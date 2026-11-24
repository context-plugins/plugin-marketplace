import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { gradeSchema, type Grade } from "./grade.js";

export type Population1 = {
  total?: number;
  grades?: Grade[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const population1Schema: Schema<Population1> = s.object<Population1>(
  {
    total: s.optional(s.int()),
    grades: s.optional(s.array(s.lazy(() => gradeSchema))),
  },
  { additionalProperties: s.json() },
);
