import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const HasKey = {
  No: "No",
  All: "All",
  With: "With",
} as const;
export type HasKey = (typeof HasKey)[keyof typeof HasKey] | (string & {});

export const hasKeySchema: EnumSchema<HasKey> = s.enumOf<HasKey>(HasKey);
