import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Default content_format: markdown. Format of the content to return. If 'html', includes HTML
 * content in response.
 */
export const ContentFormat1 = {
  Markdown: "markdown",
  Html: "html",
} as const;
export type ContentFormat1 = (typeof ContentFormat1)[keyof typeof ContentFormat1] | (string & {});

export const contentFormat1Schema: EnumSchema<ContentFormat1> = s.enumOf<ContentFormat1>(ContentFormat1);
