import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { importStatusSchema, type ImportStatus } from "./import-status.js";

export type DeleteImportResponse = {
  /** The unique identifier of the deleted import. */
  importId?: string;
  /**
   * The current status of the deletion. When the deletion is complete, the import will no longer be
   * returned by the ListImports operation and calls to the DescribeImport operation with the import
   * identifier will fail.
   */
  importStatus?: ImportStatus;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteImportResponseSchema: Schema<DeleteImportResponse> = s.object<DeleteImportResponse>(
  {
    importId: s.optional(s.string()),
    importStatus: s.optional(s.lazy(() => importStatusSchema)),
  },
  { additionalProperties: s.json() },
);
