import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { videoSchema, type Video } from "./video.js";

export type VideoListData = {
  /** @default "video_list" */
  kind?: "video_list";
  source?: string;
  videos?: Video[];
  /** Pass back as `cursor` for the next page; null when exhausted. */
  nextCursor?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const videoListDataSchema: Schema<VideoListData> = s.object<VideoListData>(
  {
    kind: s.defaulted(s.literal("video_list"), "video_list"),
    source: s.optional(s.string()),
    videos: s.optional(s.array(s.lazy(() => videoSchema))),
    nextCursor: s.optionalNullable(s.string()),
    _keysMap: {
      nextCursor: "next_cursor",
    },
  },
  { additionalProperties: s.json() },
);
