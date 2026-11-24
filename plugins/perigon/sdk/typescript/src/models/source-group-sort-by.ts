import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SourceGroupSortBy = {
  Id: "id",
  CreatedAt: "createdAt",
  UpdatedAt: "updatedAt",
  Name: "name",
} as const;
export type SourceGroupSortBy = (typeof SourceGroupSortBy)[keyof typeof SourceGroupSortBy] | (string & {});

export const sourceGroupSortBySchema: EnumSchema<SourceGroupSortBy> =
  s.enumOf<SourceGroupSortBy>(SourceGroupSortBy);
