import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FileOutput = {
  Pdf: "pdf",
  Png: "png",
  Csv: "csv",
} as const;
export type FileOutput = (typeof FileOutput)[keyof typeof FileOutput] | (string & {});

export const fileOutputSchema: EnumSchema<FileOutput> = s.enumOf<FileOutput>(FileOutput);
