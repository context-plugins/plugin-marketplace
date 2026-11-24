import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the export. When the status is Completed the export archive is available for
 * download.
 */
export const ExportStatus5 = {
  InProgress: "InProgress",
  Completed: "Completed",
  Failed: "Failed",
  Deleting: "Deleting",
} as const;
export type ExportStatus5 = (typeof ExportStatus5)[keyof typeof ExportStatus5] | (string & {});

export const exportStatus5Schema: EnumSchema<ExportStatus5> = s.enumOf<ExportStatus5>(ExportStatus5);
