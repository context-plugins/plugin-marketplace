import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const JournalistsSortBy = {
  AvgMonthlyPosts: "avgMonthlyPosts",
  LinkedinConnections: "linkedinConnections",
  LinkedinFollowers: "linkedinFollowers",
} as const;
export type JournalistsSortBy = (typeof JournalistsSortBy)[keyof typeof JournalistsSortBy] | (string & {});

export const journalistsSortBySchema: EnumSchema<JournalistsSortBy> =
  s.enumOf<JournalistsSortBy>(JournalistsSortBy);
