import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SortBy3 = {
  CitUsageCount: "cit_usage_count",
} as const;
export type SortBy3 = (typeof SortBy3)[keyof typeof SortBy3] | (string & {});

export const sortBy3Schema: EnumSchema<SortBy3> = s.enumOf<SortBy3>(SortBy3);
