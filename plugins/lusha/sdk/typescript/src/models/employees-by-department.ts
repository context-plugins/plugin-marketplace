import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type EmployeesByDepartment = {
  /** Department name */
  department?: string;
  /** Number of employees in this department */
  count?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const employeesByDepartmentSchema: Schema<EmployeesByDepartment> = s.object<EmployeesByDepartment>(
  {
    department: s.optional(s.string()),
    count: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
