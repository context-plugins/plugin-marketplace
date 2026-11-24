import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Inline formatting to apply to a formatted text section. `strikethrough` renders as a strike mark.
 */
export const ParagraphBlockTextStyle = {
  Bold: "bold",
  Italic: "italic",
  Underline: "underline",
  Strikethrough: "strikethrough",
} as const;
export type ParagraphBlockTextStyle =
  | (typeof ParagraphBlockTextStyle)[keyof typeof ParagraphBlockTextStyle]
  | (string & {});

export const paragraphBlockTextStyleSchema: EnumSchema<ParagraphBlockTextStyle> =
  s.enumOf<ParagraphBlockTextStyle>(ParagraphBlockTextStyle);
