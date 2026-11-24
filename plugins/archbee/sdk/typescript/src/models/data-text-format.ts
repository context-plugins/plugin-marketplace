import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** OPTIONAL. Return documents with dataText in this format */
export const DataTextFormat = {
  Markdown: "markdown",
  Html: "html",
} as const;
export type DataTextFormat = (typeof DataTextFormat)[keyof typeof DataTextFormat] | (string & {});

export const dataTextFormatSchema: EnumSchema<DataTextFormat> = s.enumOf<DataTextFormat>(DataTextFormat);
