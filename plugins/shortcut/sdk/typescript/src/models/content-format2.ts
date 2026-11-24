import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Format of content. For input: specifies format of provided content (defaults to 'html'). For
 * output: controls response format - 'markdown' (default) or 'html' to include HTML content.
 */
export const ContentFormat2 = {
  Markdown: "markdown",
  Html: "html",
} as const;
export type ContentFormat2 = (typeof ContentFormat2)[keyof typeof ContentFormat2] | (string & {});

export const contentFormat2Schema: EnumSchema<ContentFormat2> = s.enumOf<ContentFormat2>(ContentFormat2);
