import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the import process. When the status is Completed the resource is imported and ready
 * for use.
 */
export const ImportStatus1 = {
  InProgress: "InProgress",
  Completed: "Completed",
  Failed: "Failed",
  Deleting: "Deleting",
} as const;
export type ImportStatus1 = (typeof ImportStatus1)[keyof typeof ImportStatus1] | (string & {});

export const importStatus1Schema: EnumSchema<ImportStatus1> = s.enumOf<ImportStatus1>(ImportStatus1);
