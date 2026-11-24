import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Format of the content being sent. Defaults to 'html'. If 'markdown', content will be converted to
 * HTML for storage. Storage is always HTML; this parameter just tells us what format you're
 * sending.
 */
export const ContentFormat1 = {
  Markdown: "markdown",
  Html: "html",
} as const;
export type ContentFormat1 = (typeof ContentFormat1)[keyof typeof ContentFormat1] | (string & {});

export const contentFormat1Schema: EnumSchema<ContentFormat1> = s.enumOf<ContentFormat1>(ContentFormat1);
