import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The border style of the block. */
export const BorderStyle2 = {
  Solid: "solid",
  Dashed: "dashed",
  Dotted: "dotted",
} as const;
export type BorderStyle2 = (typeof BorderStyle2)[keyof typeof BorderStyle2] | (string & {});

export const borderStyle2Schema: EnumSchema<BorderStyle2> = s.enumOf<BorderStyle2>(BorderStyle2);
