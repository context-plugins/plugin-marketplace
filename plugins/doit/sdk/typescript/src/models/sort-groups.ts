import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Orders the rows produced by `group`, both in the console and in a rendered `fileOutput` export.
 * `a_to_z` orders them by the dimension value, `asc`/`desc` by the metric. It does not reorder the
 * `rows` of a JSON result.
 */
export const SortGroups = {
  Asc: "asc",
  Desc: "desc",
  AToZ: "a_to_z",
} as const;
export type SortGroups = (typeof SortGroups)[keyof typeof SortGroups] | (string & {});

export const sortGroupsSchema: EnumSchema<SortGroups> = s.enumOf<SortGroups>(SortGroups);
