import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Format of the content to return. Defaults to 'markdown'. If 'html', includes HTML content in
 * response.
 */
export const ContentFormat = {
  Markdown: "markdown",
  Html: "html",
} as const;
export type ContentFormat = (typeof ContentFormat)[keyof typeof ContentFormat] | (string & {});

export const contentFormatSchema: EnumSchema<ContentFormat> = s.enumOf<ContentFormat>(ContentFormat);
