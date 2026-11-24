import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { platformSchema, type Platform } from "./platform.js";
import { video2InternalSchema, video2Schema, type Video2 } from "./video2.js";

export type VideoListData2 = {
  /** @default "video_list" */
  kind?: "video_list";
  /** Which listing produced the page: channel, playlist or search. */
  source?: string;
  /**
   * Where the rows came from: the `platform` field on search, the platform detected from the URL on
   * channel and playlist.
   */
  platform?: Platform;
  videos?: Video2[];
  /** Pass back as `cursor` for the next page; null when exhausted. */
  nextCursor?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const videoListData2Properties: s.Shape<VideoListData2> = {
  kind: s.defaulted(s.literal("video_list"), "video_list"),
  source: s.optional(s.string()),
  platform: s.optional(s.lazy(() => platformSchema)),
  videos: s.optional(s.array(s.lazy(() => video2InternalSchema))),
  nextCursor: s.optionalNullable(s.string()),
  _keysMap: {
    nextCursor: "next_cursor",
  },
};

export const videoListData2InternalSchema: Schema<VideoListData2> = s.object<VideoListData2>(
  videoListData2Properties,
  { additionalProperties: s.json() },
);

export const videoListData2Schema: Schema<VideoListData2> = s.lazySchema(() =>
  s.object<VideoListData2>(
    {
      ...videoListData2Properties,
      videos: s.optional(s.array(s.lazy(() => video2Schema))),
    },
    { additionalProperties: s.json() },
  ),
);
