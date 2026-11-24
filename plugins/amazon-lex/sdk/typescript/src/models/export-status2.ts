import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the export. When the status is Complete the export archive file is available for
 * download.
 */
export const ExportStatus2 = {
  InProgress: "InProgress",
  Completed: "Completed",
  Failed: "Failed",
  Deleting: "Deleting",
} as const;
export type ExportStatus2 = (typeof ExportStatus2)[keyof typeof ExportStatus2] | (string & {});

export const exportStatus2Schema: EnumSchema<ExportStatus2> = s.enumOf<ExportStatus2>(ExportStatus2);
