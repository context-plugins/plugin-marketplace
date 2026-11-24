import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Style = {
  Normal: "normal",
  Italic: "italic",
} as const;
export type Style = (typeof Style)[keyof typeof Style] | (string & {});

export const styleSchema: EnumSchema<Style> = s.enumOf<Style>(Style);
