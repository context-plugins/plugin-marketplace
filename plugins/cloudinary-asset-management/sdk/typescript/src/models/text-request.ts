import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { FontStyle, fontStyleSchema } from "./font-style.js";
import { FontWeight, fontWeightSchema } from "./font-weight.js";
import { textAlignSchema, type TextAlign } from "./text-align.js";
import { TextDecoration, textDecorationSchema } from "./text-decoration.js";

export type TextRequest = {
  /** The text string to generate an image for. */
  text: string;
  /**
   * The identifier that is used for accessing the generated image. If not specified, a unique
   * identifier is generated.
   */
  publicId?: string;
  /** The name of the font family. */
  fontFamily?: string;
  /** Font size in points. @default 12 */
  fontSize?: number;
  /** Name or RGB representation of the font's color (e.g., red or @default "black" */
  fontColor?: string;
  /** Text alignment. */
  textAlign?: TextAlign;
  /** Whether to use a normal or bold font. @default FontWeight.Normal */
  fontWeight?: FontWeight;
  /** Whether to use a normal or italic font. @default FontStyle.Normal */
  fontStyle?: FontStyle;
  /** Name or RGB representation of the background color (e.g., red or @default "transparent" */
  background?: string;
  /** Text opacity value between 0 (invisible) and 100. @default 100 */
  opacity?: number;
  /** Text decoration style. @default TextDecoration.None */
  textDecoration?: TextDecoration;
  /** The spacing between lines of text in pixels. */
  lineSpacing?: number;
};

export const textRequestSchema: Schema<TextRequest> = s.object<TextRequest>({
  text: s.string(),
  publicId: s.optional(s.string()),
  fontFamily: s.optional(s.string()),
  fontSize: s.defaulted(s.int(), 12),
  fontColor: s.defaulted(s.string(), "black"),
  textAlign: s.optional(s.lazy(() => textAlignSchema)),
  fontWeight: s.defaulted(fontWeightSchema, FontWeight.Normal),
  fontStyle: s.defaulted(fontStyleSchema, FontStyle.Normal),
  background: s.defaulted(s.string(), "transparent"),
  opacity: s.defaulted(s.int(), 100),
  textDecoration: s.defaulted(textDecorationSchema, TextDecoration.None),
  lineSpacing: s.optional(s.int()),
  _keysMap: {
    publicId: "public_id",
    fontFamily: "font_family",
    fontSize: "font_size",
    fontColor: "font_color",
    textAlign: "text_align",
    fontWeight: "font_weight",
    fontStyle: "font_style",
    textDecoration: "text_decoration",
    lineSpacing: "line_spacing",
  },
});
