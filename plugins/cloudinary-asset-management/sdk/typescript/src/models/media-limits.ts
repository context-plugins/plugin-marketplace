import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Upload size and pixel limits */
export type MediaLimits = {
  /** Maximum size for images in bytes */
  imageMaxSizeBytes?: number;
  /** Maximum size for videos in bytes */
  videoMaxSizeBytes?: number;
  /** Maximum size for raw files in bytes */
  rawMaxSizeBytes?: number;
  /** Maximum pixels for images */
  imageMaxPx?: number;
  /** Maximum total pixels for assets */
  assetMaxTotalPx?: number;
};

export const mediaLimitsSchema: Schema<MediaLimits> = s.object<MediaLimits>({
  imageMaxSizeBytes: s.optional(s.int()),
  videoMaxSizeBytes: s.optional(s.int()),
  rawMaxSizeBytes: s.optional(s.int()),
  imageMaxPx: s.optional(s.int()),
  assetMaxTotalPx: s.optional(s.int()),
  _keysMap: {
    imageMaxSizeBytes: "image_max_size_bytes",
    videoMaxSizeBytes: "video_max_size_bytes",
    rawMaxSizeBytes: "raw_max_size_bytes",
    imageMaxPx: "image_max_px",
    assetMaxTotalPx: "asset_max_total_px",
  },
});
