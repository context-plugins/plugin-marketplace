import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Grade = {
  grade?: string;
  count?: number;
  /** Copies graded with a qualifier, for example 9 OC */
  withQualifier?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const gradeSchema: Schema<Grade> = s.object<Grade>(
  {
    grade: s.optional(s.string()),
    count: s.optional(s.int()),
    withQualifier: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
