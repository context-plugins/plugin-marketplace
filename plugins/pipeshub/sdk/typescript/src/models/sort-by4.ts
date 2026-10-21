import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SortBy4 = {
  CreatedAt: "createdAt",
  LastActivityAt: "lastActivityAt",
  Title: "title",
} as const;
export type SortBy4 = (typeof SortBy4)[keyof typeof SortBy4] | (string & {});

export const sortBy4Schema: EnumSchema<SortBy4> = s.enumOf<SortBy4>(SortBy4);
