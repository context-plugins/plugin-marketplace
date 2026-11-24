import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The file format used for the files that define the resource. The TSV format is required to export
 * a custom vocabulary only; otherwise use LexJson format.
 */
export const FileFormat4 = {
  LexJson: "LexJson",
  Tsv: "TSV",
  Csv: "CSV",
} as const;
export type FileFormat4 = (typeof FileFormat4)[keyof typeof FileFormat4] | (string & {});

export const fileFormat4Schema: EnumSchema<FileFormat4> = s.enumOf<FileFormat4>(FileFormat4);
