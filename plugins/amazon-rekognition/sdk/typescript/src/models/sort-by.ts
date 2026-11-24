import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Sort to use for celebrities returned in Celebrities field. Specify ID to sort by the celebrity
 * identifier, specify TIMESTAMP to sort by the time the celebrity was recognized.
 */
export const SortBy = {
  Id: "ID",
  Timestamp: "TIMESTAMP",
} as const;
export type SortBy = (typeof SortBy)[keyof typeof SortBy] | (string & {});

export const sortBySchema: EnumSchema<SortBy> = s.enumOf<SortBy>(SortBy);
