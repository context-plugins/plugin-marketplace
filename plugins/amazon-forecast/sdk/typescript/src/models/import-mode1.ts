import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The import mode of the dataset import job, FULL or INCREMENTAL. */
export const ImportMode1 = {
  Full: "FULL",
  Incremental: "INCREMENTAL",
} as const;
export type ImportMode1 = (typeof ImportMode1)[keyof typeof ImportMode1] | (string & {});

export const importMode1Schema: EnumSchema<ImportMode1> = s.enumOf<ImportMode1>(ImportMode1);
