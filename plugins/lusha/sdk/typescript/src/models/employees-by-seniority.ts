import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type EmployeesBySeniority = {
  /** Seniority level */
  seniority?: string;
  /** Number of employees at this seniority level */
  count?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const employeesBySenioritySchema: Schema<EmployeesBySeniority> = s.object<EmployeesBySeniority>(
  {
    seniority: s.optional(s.string()),
    count: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
