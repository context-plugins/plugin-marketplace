import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The file format used for the bot or bot locale definition files. */
export const FileFormat1 = {
  LexJson: "LexJson",
  Tsv: "TSV",
  Csv: "CSV",
} as const;
export type FileFormat1 = (typeof FileFormat1)[keyof typeof FileFormat1] | (string & {});

export const fileFormat1Schema: EnumSchema<FileFormat1> = s.enumOf<FileFormat1>(FileFormat1);
