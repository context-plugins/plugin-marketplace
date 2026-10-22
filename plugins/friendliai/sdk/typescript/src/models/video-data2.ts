import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The video URL data. */
export type VideoData2 = {
  /** The URL of the video. */
  url: string;
};

export const videoData2Schema: Schema<VideoData2> = s.object<VideoData2>({
  url: s.string(),
});
