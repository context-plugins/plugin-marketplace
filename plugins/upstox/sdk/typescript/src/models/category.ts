import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Investor category to apply under. Must be one the issue accepts — see `investors[].category` in
 * the IPO details API
 */
export const Category = {
  Ind: "IND",
  Hni: "HNI",
} as const;
export type Category = (typeof Category)[keyof typeof Category] | (string & {});

export const categorySchema: EnumSchema<Category> = s.enumOf<Category>(Category);
