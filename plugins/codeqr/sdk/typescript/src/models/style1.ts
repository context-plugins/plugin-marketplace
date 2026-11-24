import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Font style of the frame label text. `italic` applies `font-style="italic"`. */
export const Style1 = {
  Normal: "normal",
  Italic: "italic",
} as const;
export type Style1 = (typeof Style1)[keyof typeof Style1] | (string & {});

export const style1Schema: EnumSchema<Style1> = s.enumOf<Style1>(Style1);
