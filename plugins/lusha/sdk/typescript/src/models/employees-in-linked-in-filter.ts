import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Filter companies by LinkedIn-reported employee count. Both `min` and `max` are optional — provide
 * either or both.
 */
export type EmployeesInLinkedInFilter = {
  /** Minimum employee count (inclusive) */
  min?: number;
  /** Maximum employee count (inclusive) */
  max?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const employeesInLinkedInFilterSchema: Schema<EmployeesInLinkedInFilter> =
  s.object<EmployeesInLinkedInFilter>(
    {
      min: s.optional(s.int()),
      max: s.optional(s.int()),
    },
    { additionalProperties: s.json() },
  );
