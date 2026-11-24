import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The file format used in the files that describe the resource. */
export const FileFormat2 = {
  LexJson: "LexJson",
  Tsv: "TSV",
  Csv: "CSV",
} as const;
export type FileFormat2 = (typeof FileFormat2)[keyof typeof FileFormat2] | (string & {});

export const fileFormat2Schema: EnumSchema<FileFormat2> = s.enumOf<FileFormat2>(FileFormat2);
