import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Specifies the field to sort results by. If you specify SortBy, you must also specify SortOrder.
 */
export const SortBy = {
  CreatedAt: "CREATED_AT",
} as const;
export type SortBy = (typeof SortBy)[keyof typeof SortBy] | (string & {});

export const sortBySchema: EnumSchema<SortBy> = s.enumOf<SortBy>(SortBy);
