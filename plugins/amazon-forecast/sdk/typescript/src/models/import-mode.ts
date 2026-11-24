import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Specifies whether the dataset import job is a FULL or INCREMENTAL import. A FULL dataset import
 * replaces all of the existing data with the newly imported data. An INCREMENTAL import appends the
 * imported data to the existing data.
 */
export const ImportMode = {
  Full: "FULL",
  Incremental: "INCREMENTAL",
} as const;
export type ImportMode = (typeof ImportMode)[keyof typeof ImportMode] | (string & {});

export const importModeSchema: EnumSchema<ImportMode> = s.enumOf<ImportMode>(ImportMode);
