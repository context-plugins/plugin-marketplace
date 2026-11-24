import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Investor category the issue accepts. Pass this value as category when applying */
export const Category1 = {
  Ind: "IND",
  Hni: "HNI",
} as const;
export type Category1 = (typeof Category1)[keyof typeof Category1] | (string & {});

export const category1Schema: EnumSchema<Category1> = s.enumOf<Category1>(Category1);
