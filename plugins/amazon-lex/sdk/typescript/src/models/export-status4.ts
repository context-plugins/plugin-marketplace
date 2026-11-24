import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the export. IN_PROGRESS - The export is in progress. READY - The export is
 * complete. FAILED - The export could not be completed.
 */
export const ExportStatus4 = {
  InProgress: "IN_PROGRESS",
  Ready: "READY",
  Failed: "FAILED",
} as const;
export type ExportStatus4 = (typeof ExportStatus4)[keyof typeof ExportStatus4] | (string & {});

export const exportStatus4Schema: EnumSchema<ExportStatus4> = s.enumOf<ExportStatus4>(ExportStatus4);
