import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type VideoData = {
  /** The URL of the video. */
  url: string;
};

export const videoDataSchema: Schema<VideoData> = s.object<VideoData>({
  url: s.string(),
});
