import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The criterion to be used to list build report groups. Valid values include: CREATED_TIME: List
 * based on when each report group was created. LAST_MODIFIED_TIME: List based on when each report
 * group was last changed. NAME: List based on each report group's name.
 */
export const SortBy1 = {
  Name: "NAME",
  CreatedTime: "CREATED_TIME",
  LastModifiedTime: "LAST_MODIFIED_TIME",
} as const;
export type SortBy1 = (typeof SortBy1)[keyof typeof SortBy1] | (string & {});

export const sortBy1Schema: EnumSchema<SortBy1> = s.enumOf<SortBy1>(SortBy1);
