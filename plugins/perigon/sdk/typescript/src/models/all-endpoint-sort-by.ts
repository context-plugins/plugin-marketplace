import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AllEndpointSortBy = {
  Relevance: "relevance",
  Date: "date",
  ReverseDate: "reverseDate",
  ReverseAddDate: "reverseAddDate",
  AddDate: "addDate",
  PubDate: "pubDate",
  RefreshDate: "refreshDate",
} as const;
export type AllEndpointSortBy = (typeof AllEndpointSortBy)[keyof typeof AllEndpointSortBy] | (string & {});

export const allEndpointSortBySchema: EnumSchema<AllEndpointSortBy> =
  s.enumOf<AllEndpointSortBy>(AllEndpointSortBy);
