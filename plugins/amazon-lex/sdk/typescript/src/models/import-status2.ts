import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status of the resource. When the status is Completed the resource is ready to build. */
export const ImportStatus2 = {
  InProgress: "InProgress",
  Completed: "Completed",
  Failed: "Failed",
  Deleting: "Deleting",
} as const;
export type ImportStatus2 = (typeof ImportStatus2)[keyof typeof ImportStatus2] | (string & {});

export const importStatus2Schema: EnumSchema<ImportStatus2> = s.enumOf<ImportStatus2>(ImportStatus2);
