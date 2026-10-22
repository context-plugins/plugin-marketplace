import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SortBy2 = {
  CitLastUsedAt: "cit_last_used_at",
} as const;
export type SortBy2 = (typeof SortBy2)[keyof typeof SortBy2] | (string & {});

export const sortBy2Schema: EnumSchema<SortBy2> = s.enumOf<SortBy2>(SortBy2);
