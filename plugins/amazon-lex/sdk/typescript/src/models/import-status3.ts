import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The current status of the import. When the status is Complete the bot, bot alias, or custom
 * vocabulary is ready to use.
 */
export const ImportStatus3 = {
  InProgress: "InProgress",
  Completed: "Completed",
  Failed: "Failed",
  Deleting: "Deleting",
} as const;
export type ImportStatus3 = (typeof ImportStatus3)[keyof typeof ImportStatus3] | (string & {});

export const importStatus3Schema: EnumSchema<ImportStatus3> = s.enumOf<ImportStatus3>(ImportStatus3);
