import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Industry = {
  It: "it",
  Construction: "construction",
  Medicine: "medicine",
} as const;
export type Industry = (typeof Industry)[keyof typeof Industry] | (string & {});

export const industrySchema: EnumSchema<Industry> = s.enumOf<Industry>(Industry);
