import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ImportStatus = {
  InProgress: "InProgress",
  Completed: "Completed",
  Error: "Error",
} as const;
export type ImportStatus = (typeof ImportStatus)[keyof typeof ImportStatus] | (string & {});

export const importStatusSchema: EnumSchema<ImportStatus> = s.enumOf<ImportStatus>(ImportStatus);
