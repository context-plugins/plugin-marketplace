import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { link2Schema, type Link2 } from "./link2.js";
import { paragraphBlockTextStyleSchema, type ParagraphBlockTextStyle } from "./paragraph-block-text-style.js";

export type ParagraphBlockTextSection = {
  /** The text content of the paragraph. */
  text: string;
  /** The inline styles for the text. */
  styling?: ParagraphBlockTextStyle[];
  /** The CSS color value for the text. */
  textColor?: string;
  /** The CSS color value for the text highlight. */
  highlightColor?: string;
  /** The link of the text. */
  link?: Link2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const paragraphBlockTextSectionSchema: Schema<ParagraphBlockTextSection> =
  s.object<ParagraphBlockTextSection>(
    {
      text: s.string(),
      styling: s.optional(s.array(s.lazy(() => paragraphBlockTextStyleSchema))),
      textColor: s.optional(s.string()),
      highlightColor: s.optional(s.string()),
      link: s.optional(s.lazy(() => link2Schema)),
      _keysMap: {
        textColor: "text_color",
        highlightColor: "highlight_color",
      },
    },
    { additionalProperties: s.json() },
  );
