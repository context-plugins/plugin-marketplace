import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type FilterByDepartment = {
  department: string;
  startDate?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const filterByDepartmentSchema: Schema<FilterByDepartment> = s.object<FilterByDepartment>(
  {
    department: s.string(),
    startDate: s.optional(s.dateOnly()),
  },
  { additionalProperties: s.json() },
);
