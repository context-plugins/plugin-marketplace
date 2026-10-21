import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { employeeInfoDefinitionSchema, type EmployeeInfoDefinition } from "./employee-info-definition.js";

/** describes info about an employee and optional version for that info */
export type EmployeeAndVersionDefinition = {
  /** Describes employee info */
  employee?: EmployeeInfoDefinition;
  /** Version number for the employee object. If absent or 0 then no version checks are done */
  version?: number;
};

export const employeeAndVersionDefinitionSchema: Schema<EmployeeAndVersionDefinition> =
  s.object<EmployeeAndVersionDefinition>({
    employee: s.optional(s.lazy(() => employeeInfoDefinitionSchema)),
    version: s.optional(s.int()),
  });
