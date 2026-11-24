import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status of the export. When the status is Completed the export is ready to download. */
export const ExportStatus3 = {
  InProgress: "InProgress",
  Completed: "Completed",
  Failed: "Failed",
  Deleting: "Deleting",
} as const;
export type ExportStatus3 = (typeof ExportStatus3)[keyof typeof ExportStatus3] | (string & {});

export const exportStatus3Schema: EnumSchema<ExportStatus3> = s.enumOf<ExportStatus3>(ExportStatus3);
