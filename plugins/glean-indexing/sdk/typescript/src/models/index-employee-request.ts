import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { employeeInfoDefinitionSchema, type EmployeeInfoDefinition } from "./employee-info-definition.js";

/** Info about an employee and optional version for that info */
export type IndexEmployeeRequest = {
  /** Describes employee info */
  employee: EmployeeInfoDefinition;
  /** Version number for the employee object. If absent or 0 then no version checks are done */
  version?: number;
};

export const indexEmployeeRequestSchema: Schema<IndexEmployeeRequest> = s.object<IndexEmployeeRequest>({
  employee: employeeInfoDefinitionSchema,
  version: s.optional(s.int()),
});
