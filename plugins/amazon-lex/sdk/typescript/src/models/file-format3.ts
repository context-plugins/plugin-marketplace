import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The file format used in the export files. */
export const FileFormat3 = {
  LexJson: "LexJson",
  Tsv: "TSV",
  Csv: "CSV",
} as const;
export type FileFormat3 = (typeof FileFormat3)[keyof typeof FileFormat3] | (string & {});

export const fileFormat3Schema: EnumSchema<FileFormat3> = s.enumOf<FileFormat3>(FileFormat3);
