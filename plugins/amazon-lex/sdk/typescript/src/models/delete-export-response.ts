import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { exportStatus1Schema, type ExportStatus1 } from "./export-status1.js";

export type DeleteExportResponse = {
  /** The unique identifier of the deleted export. */
  exportId?: string;
  /**
   * The current status of the deletion. When the deletion is complete, the export will no longer be
   * returned by the ListExports operation and calls to the DescribeExport operation with the export
   * identifier will fail.
   */
  exportStatus?: ExportStatus1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteExportResponseSchema: Schema<DeleteExportResponse> = s.object<DeleteExportResponse>(
  {
    exportId: s.optional(s.string()),
    exportStatus: s.optional(s.lazy(() => exportStatus1Schema)),
  },
  { additionalProperties: s.json() },
);
