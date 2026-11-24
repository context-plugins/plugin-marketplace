import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SourcesSortBy = {
  GlobalRank: "globalRank",
  Relevance: "relevance",
  MonthlyVisits: "monthlyVisits",
  AvgMonthlyPosts: "avgMonthlyPosts",
} as const;
export type SourcesSortBy = (typeof SourcesSortBy)[keyof typeof SourcesSortBy] | (string & {});

export const sourcesSortBySchema: EnumSchema<SourcesSortBy> = s.enumOf<SourcesSortBy>(SourcesSortBy);
