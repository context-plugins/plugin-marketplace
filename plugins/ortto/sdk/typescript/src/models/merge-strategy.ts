import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** 1 = append only, 2 = overwrite existing, 3 = ignore. */
export const MergeStrategy = {
  _1: 1,
  _2: 2,
  _3: 3,
} as const;
export type MergeStrategy = (typeof MergeStrategy)[keyof typeof MergeStrategy] | (number & {});

export const mergeStrategySchema: EnumSchema<MergeStrategy> = s.enumOf<MergeStrategy>(MergeStrategy);
