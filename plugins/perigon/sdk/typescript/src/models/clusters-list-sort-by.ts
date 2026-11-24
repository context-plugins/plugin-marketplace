import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ClustersListSortBy = {
  CreatedAt: "createdAt",
  UpdatedAt: "updatedAt",
  Relevance: "relevance",
  Count: "count",
  TotalCount: "totalCount",
} as const;
export type ClustersListSortBy = (typeof ClustersListSortBy)[keyof typeof ClustersListSortBy] | (string & {});

export const clustersListSortBySchema: EnumSchema<ClustersListSortBy> =
  s.enumOf<ClustersListSortBy>(ClustersListSortBy);
