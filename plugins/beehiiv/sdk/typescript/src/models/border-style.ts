import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const BorderStyle = {
  Solid: "solid",
  Dashed: "dashed",
  Dotted: "dotted",
} as const;
export type BorderStyle = (typeof BorderStyle)[keyof typeof BorderStyle] | (string & {});

export const borderStyleSchema: EnumSchema<BorderStyle> = s.enumOf<BorderStyle>(BorderStyle);
