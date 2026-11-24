import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Required. The file format. */
export const FileFormat = {
  FileFormatUnspecified: "FILE_FORMAT_UNSPECIFIED",
  Parquet: "PARQUET",
} as const;
export type FileFormat = (typeof FileFormat)[keyof typeof FileFormat] | (string & {});

export const fileFormatSchema: EnumSchema<FileFormat> = s.enumOf<FileFormat>(FileFormat);
