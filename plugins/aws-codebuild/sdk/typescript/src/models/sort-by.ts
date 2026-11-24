import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The criterion to be used to list build project names. Valid values include: CREATED_TIME: List
 * based on when each build project was created. LAST_MODIFIED_TIME: List based on when information
 * about each build project was last changed. NAME: List based on each build project's name. Use
 * sortOrder to specify in what order to list the build project names based on the preceding
 * criteria.
 */
export const SortBy = {
  Name: "NAME",
  CreatedTime: "CREATED_TIME",
  LastModifiedTime: "LAST_MODIFIED_TIME",
} as const;
export type SortBy = (typeof SortBy)[keyof typeof SortBy] | (string & {});

export const sortBySchema: EnumSchema<SortBy> = s.enumOf<SortBy>(SortBy);
