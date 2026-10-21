import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SortBy = {
  Name: "name",
  CreatedAtTimestamp: "createdAtTimestamp",
  UpdatedAtTimestamp: "updatedAtTimestamp",
  UserRole: "userRole",
} as const;
export type SortBy = (typeof SortBy)[keyof typeof SortBy] | (string & {});

export const sortBySchema: EnumSchema<SortBy> = s.enumOf<SortBy>(SortBy);
