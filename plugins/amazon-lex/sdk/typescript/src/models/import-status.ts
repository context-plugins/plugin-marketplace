import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The current status of the deletion. When the deletion is complete, the import will no longer be
 * returned by the ListImports operation and calls to the DescribeImport operation with the import
 * identifier will fail.
 */
export const ImportStatus = {
  InProgress: "InProgress",
  Completed: "Completed",
  Failed: "Failed",
  Deleting: "Deleting",
} as const;
export type ImportStatus = (typeof ImportStatus)[keyof typeof ImportStatus] | (string & {});

export const importStatusSchema: EnumSchema<ImportStatus> = s.enumOf<ImportStatus>(ImportStatus);
