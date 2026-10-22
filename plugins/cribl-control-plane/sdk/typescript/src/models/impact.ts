import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Impact level to assign to the Detection Rule. */
export const Impact = {
  _1: 1,
  _2: 2,
  _3: 3,
  _4: 4,
} as const;
export type Impact = (typeof Impact)[keyof typeof Impact] | (number & {});

export const impactSchema: EnumSchema<Impact> = s.enumOf<Impact>(Impact);
