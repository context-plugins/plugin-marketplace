import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Optional text to display inside the form field. */
export type Text = {
  /** Content of the text field. */
  content?: string;
  /**
   * Font name to use. It is just a suggestion. For PDF: all default PDF fonts can be used or fonts
   * which are already embedded in the document. If not specified, the default font of the form
   * field will be used.
   */
  fontName?: string;
  /** Font size to use. If not specified, the default size for the form field will be used. */
  fontSize?: string;
  /** Font color to use as RGB value encoded in hex. Defaults to black (#000000). */
  fontColor?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const textSchema: Schema<Text> = s.object<Text>(
  {
    content: s.optional(s.string()),
    fontName: s.optional(s.string()),
    fontSize: s.optional(s.string()),
    fontColor: s.optional(s.string()),
    _keysMap: {
      fontName: "font_name",
      fontSize: "font_size",
      fontColor: "font_color",
    },
  },
  { additionalProperties: s.json() },
);
