import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type BlackFrame = {
  /**
   * A threshold used to determine the maximum luminance value for a pixel to be considered black.
   * In a full color range video, luminance values range from 0-255. A pixel value of 0 is pure
   * black, and the most strict filter. The maximum black pixel value is computed as follows:
   * max_black_pixel_value = minimum_luminance + MaxPixelThreshold *luminance_range. For example,
   * for a full range video with BlackPixelThreshold = 0.1, max_black_pixel_value is 0 + 0.1 *
   * (255-0) = 25.5. The default value of MaxPixelThreshold is 0.2, which maps to a
   * max_black_pixel_value of 51 for a full range video. You can lowe
   */
  maxPixelThreshold?: number;
  /**
   * The minimum percentage of pixels in a frame that need to have a luminance below the
   * max_black_pixel_value for a frame to be considered a black frame. Luminance is calculated using
   * the BT.709 matrix. The default value is 99, which means at least 99% of all pixels in the frame
   * are black pixels as per the MaxPixelThreshold set. You can reduce this value to allow more
   * noise on the black frame.
   */
  minCoveragePercentage?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const blackFrameSchema: Schema<BlackFrame> = s.object<BlackFrame>(
  {
    maxPixelThreshold: s.optional(s.float64()),
    minCoveragePercentage: s.optional(s.float64()),
    _keysMap: {
      maxPixelThreshold: "MaxPixelThreshold",
      minCoveragePercentage: "MinCoveragePercentage",
    },
  },
  { additionalProperties: s.json() },
);
