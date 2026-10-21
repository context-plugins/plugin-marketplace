import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Whether to use a normal or italic font. */
export const FontStyle = {
  Normal: "normal",
  Italic: "italic",
} as const;
export type FontStyle = (typeof FontStyle)[keyof typeof FontStyle] | (string & {});

export const fontStyleSchema: EnumSchema<FontStyle> = s.enumOf<FontStyle>(FontStyle);
