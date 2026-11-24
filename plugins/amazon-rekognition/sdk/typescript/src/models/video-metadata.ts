import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { colorRangeSchema, type ColorRange } from "./color-range.js";

export type VideoMetadata = {
  /** Type of compression used in the analyzed video. */
  codec?: string;
  /** Length of the video in milliseconds. */
  durationMillis?: number;
  /** Format of the analyzed video. Possible values are MP4, MOV and AVI. */
  format?: string;
  /** Number of frames per second in the video. */
  frameRate?: number;
  /** Vertical pixel dimension of the video. */
  frameHeight?: number;
  /** Horizontal pixel dimension of the video. */
  frameWidth?: number;
  /**
   * A description of the range of luminance values in a video, either LIMITED (16 to 235) or FULL
   * (0 to 255).
   */
  colorRange?: ColorRange;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const videoMetadataSchema: Schema<VideoMetadata> = s.object<VideoMetadata>(
  {
    codec: s.optional(s.string()),
    durationMillis: s.optional(s.int()),
    format: s.optional(s.string()),
    frameRate: s.optional(s.float64()),
    frameHeight: s.optional(s.int()),
    frameWidth: s.optional(s.int()),
    colorRange: s.optional(s.lazy(() => colorRangeSchema)),
    _keysMap: {
      codec: "Codec",
      durationMillis: "DurationMillis",
      format: "Format",
      frameRate: "FrameRate",
      frameHeight: "FrameHeight",
      frameWidth: "FrameWidth",
      colorRange: "ColorRange",
    },
  },
  { additionalProperties: s.json() },
);
