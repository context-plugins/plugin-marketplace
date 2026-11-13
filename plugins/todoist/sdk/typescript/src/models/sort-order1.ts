import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether to show projects in an oldest dates first order (if set to 0), or a oldest dates last
 * order (if set to 1)
 */
export const SortOrder1 = {
  _0: 0,
  _1: 1,
} as const;
export type SortOrder1 = (typeof SortOrder1)[keyof typeof SortOrder1] | (number & {});

export const sortOrder1Schema: EnumSchema<SortOrder1> = s.enumOf<SortOrder1>(SortOrder1);
