import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SortBy = {
  ViewEndedAt: "view_ended_at",
  VideoDuration: "video_duration",
  ViewWatchTime: "view_watch_time",
  ViewEndedAt2: "-view_ended_at",
  VideoDuration2: "-video_duration",
  ViewWatchTime2: "-view_watch_time",
} as const;
export type SortBy = (typeof SortBy)[keyof typeof SortBy] | (string & {});

export const sortBySchema: EnumSchema<SortBy> = s.enumOf<SortBy>(SortBy);
