import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Sort order: starred (caller's starred first), date (updated_at DESC), name (A-Z), stars
 * (star_count DESC)
 */
export const SortBy = {
  Starred: "starred",
  Date: "date",
  Name: "name",
  Stars: "stars",
} as const;
export type SortBy = (typeof SortBy)[keyof typeof SortBy] | (string & {});

export const sortBySchema: EnumSchema<SortBy> = s.enumOf<SortBy>(SortBy);
