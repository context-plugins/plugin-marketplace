import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** 1 = ChatThai 3 = Rsu */
export const TemplateFont = {
  _1: 1,
  _3: 3,
} as const;
export type TemplateFont = (typeof TemplateFont)[keyof typeof TemplateFont] | (number & {});

export const templateFontSchema: EnumSchema<TemplateFont> = s.enumOf<TemplateFont>(TemplateFont);
