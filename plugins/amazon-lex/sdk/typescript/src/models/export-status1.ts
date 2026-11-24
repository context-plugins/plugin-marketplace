import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The current status of the deletion. When the deletion is complete, the export will no longer be
 * returned by the ListExports operation and calls to the DescribeExport operation with the export
 * identifier will fail.
 */
export const ExportStatus1 = {
  InProgress: "InProgress",
  Completed: "Completed",
  Failed: "Failed",
  Deleting: "Deleting",
} as const;
export type ExportStatus1 = (typeof ExportStatus1)[keyof typeof ExportStatus1] | (string & {});

export const exportStatus1Schema: EnumSchema<ExportStatus1> = s.enumOf<ExportStatus1>(ExportStatus1);
