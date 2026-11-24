import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Shape of the extracted content when `extract` is true. */
export const ExtractFormat = {
  Markdown: "markdown",
  Json: "json",
  Html: "html",
  Text: "text",
} as const;
export type ExtractFormat = (typeof ExtractFormat)[keyof typeof ExtractFormat] | (string & {});

export const extractFormatSchema: EnumSchema<ExtractFormat> = s.enumOf<ExtractFormat>(ExtractFormat);
