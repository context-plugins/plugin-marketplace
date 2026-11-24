import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Text displayed inside the form field. */
export type TextSkribbleSignatureApi = {
  /** Content of the text field. */
  content?: string;
  /** Font name used. For PDF: all default PDF fonts or fonts already embedded in the document. */
  fontName?: string;
  /** Font size used. */
  fontSize?: string;
  /** Font color as RGB value encoded in hex. */
  fontColor?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const textSkribbleSignatureApiSchema: Schema<TextSkribbleSignatureApi> =
  s.object<TextSkribbleSignatureApi>(
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
