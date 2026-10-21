import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { videoData2Schema, type VideoData2 } from "./video-data2.js";

export type VideoContent = {
  /** The type of the message content. @default "video_url" */
  type?: "video_url";
  /** The video URL data. */
  videoUrl: VideoData2;
};

export const videoContentSchema: Schema<VideoContent> = s.object<VideoContent>({
  type: s.defaulted(s.literal("video_url"), "video_url"),
  videoUrl: videoData2Schema,
  _keysMap: {
    videoUrl: "video_url",
  },
});
