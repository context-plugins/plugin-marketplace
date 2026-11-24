import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { gradeSchema, type Grade } from "./grade.js";

export type Totals = {
  total?: number;
  grades?: Grade[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const totalsSchema: Schema<Totals> = s.object<Totals>(
  {
    total: s.optional(s.int()),
    grades: s.optional(s.array(s.lazy(() => gradeSchema))),
  },
  { additionalProperties: s.json() },
);
