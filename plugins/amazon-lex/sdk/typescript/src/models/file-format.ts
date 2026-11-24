import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The file format of the bot or bot locale definition files. */
export const FileFormat = {
  LexJson: "LexJson",
  Tsv: "TSV",
  Csv: "CSV",
} as const;
export type FileFormat = (typeof FileFormat)[keyof typeof FileFormat] | (string & {});

export const fileFormatSchema: EnumSchema<FileFormat> = s.enumOf<FileFormat>(FileFormat);
