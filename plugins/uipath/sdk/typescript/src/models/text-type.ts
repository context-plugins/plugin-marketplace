import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Whether the source text was printed or handwritten */
export const TextType = {
  Printed: "Printed",
  Handwritten: "Handwritten",
} as const;
export type TextType = (typeof TextType)[keyof typeof TextType] | (string & {});

export const textTypeSchema: EnumSchema<TextType> = s.enumOf<TextType>(TextType);
