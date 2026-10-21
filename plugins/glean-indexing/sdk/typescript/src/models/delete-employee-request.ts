import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Describes the request body of the /deleteemployee API call */
export type DeleteEmployeeRequest = {
  /**
   * Version number for document for optimistic concurrency control. If absent or 0 then no version
   * checks are done.
   */
  version?: number;
  /** The deleted employee's email */
  employeeEmail: string;
};

export const deleteEmployeeRequestSchema: Schema<DeleteEmployeeRequest> = s.object<DeleteEmployeeRequest>({
  version: s.optional(s.int()),
  employeeEmail: s.string(),
});
