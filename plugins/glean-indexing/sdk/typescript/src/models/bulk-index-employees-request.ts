import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { employeeInfoDefinitionSchema, type EmployeeInfoDefinition } from "./employee-info-definition.js";

/** Describes the request body of the /bulkindexemployees API call */
export type BulkIndexEmployeesRequest = {
  /** Unique id that must be used for this bulk upload instance */
  uploadId: string;
  /** true if this is the first page of the upload. Defaults to false */
  isFirstPage?: boolean;
  /** true if this is the last page of the upload. Defaults to false */
  isLastPage?: boolean;
  /**
   * Flag to discard previous upload attempts and start from scratch. Must be specified with
   * isFirstPage=true
   */
  forceRestartUpload?: boolean;
  /** Batch of employee information */
  employees: EmployeeInfoDefinition[];
  /**
   * True if older employee data needs to be force deleted after the upload completes. Defaults to
   * older data being deleted only if the percentage of data being deleted is less than 20%. This
   * must only be set when `isLastPage = true`
   */
  disableStaleDataDeletionCheck?: boolean;
};

export const bulkIndexEmployeesRequestSchema: Schema<BulkIndexEmployeesRequest> =
  s.object<BulkIndexEmployeesRequest>({
    uploadId: s.string(),
    isFirstPage: s.optional(s.boolean()),
    isLastPage: s.optional(s.boolean()),
    forceRestartUpload: s.optional(s.boolean()),
    employees: s.array(s.lazy(() => employeeInfoDefinitionSchema)),
    disableStaleDataDeletionCheck: s.optional(s.boolean()),
  });
