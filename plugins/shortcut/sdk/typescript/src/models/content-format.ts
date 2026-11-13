import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Default content_format: html. Format of the content being sent. If 'markdown', content will be
 * converted to HTML for storage. Storage is always HTML; this parameter just tells us what format
 * you're sending.
 */
export const ContentFormat = {
  Markdown: "markdown",
  Html: "html",
} as const;
export type ContentFormat = (typeof ContentFormat)[keyof typeof ContentFormat] | (string & {});

export const contentFormatSchema: EnumSchema<ContentFormat> = s.enumOf<ContentFormat>(ContentFormat);
