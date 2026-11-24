import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the export. When the status is Completed, you can use the DescribeExport operation
 * to get the pre-signed S3 URL link to your exported bot or bot locale.
 */
export const ExportStatus = {
  InProgress: "InProgress",
  Completed: "Completed",
  Failed: "Failed",
  Deleting: "Deleting",
} as const;
export type ExportStatus = (typeof ExportStatus)[keyof typeof ExportStatus] | (string & {});

export const exportStatusSchema: EnumSchema<ExportStatus> = s.enumOf<ExportStatus>(ExportStatus);
