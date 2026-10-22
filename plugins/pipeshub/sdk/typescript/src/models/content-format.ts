import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Format of the content for rendering */
export const ContentFormat = {
  Markdown: "MARKDOWN",
  Json: "JSON",
  Html: "HTML",
} as const;
export type ContentFormat = (typeof ContentFormat)[keyof typeof ContentFormat] | (string & {});

export const contentFormatSchema: EnumSchema<ContentFormat> = s.enumOf<ContentFormat>(ContentFormat);
