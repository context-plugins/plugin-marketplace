import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ToxicityCategory = {
  All: "ALL",
} as const;
export type ToxicityCategory = (typeof ToxicityCategory)[keyof typeof ToxicityCategory] | (string & {});

export const toxicityCategorySchema: EnumSchema<ToxicityCategory> =
  s.enumOf<ToxicityCategory>(ToxicityCategory);
