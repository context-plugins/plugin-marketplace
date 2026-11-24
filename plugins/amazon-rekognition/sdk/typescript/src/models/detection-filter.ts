import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DetectionFilter = {
  /**
   * Sets the confidence of word detection. Words with detection confidence below this will be
   * excluded from the result. Values should be between 0 and 100. The default MinConfidence is 80.
   */
  minConfidence?: number;
  /**
   * Sets the minimum height of the word bounding box. Words with bounding box heights lesser than
   * this value will be excluded from the result. Value is relative to the video frame height.
   */
  minBoundingBoxHeight?: number;
  /**
   * Sets the minimum width of the word bounding box. Words with bounding boxes widths lesser than
   * this value will be excluded from the result. Value is relative to the video frame width.
   */
  minBoundingBoxWidth?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const detectionFilterSchema: Schema<DetectionFilter> = s.object<DetectionFilter>(
  {
    minConfidence: s.optional(s.float64()),
    minBoundingBoxHeight: s.optional(s.float64()),
    minBoundingBoxWidth: s.optional(s.float64()),
    _keysMap: {
      minConfidence: "MinConfidence",
      minBoundingBoxHeight: "MinBoundingBoxHeight",
      minBoundingBoxWidth: "MinBoundingBoxWidth",
    },
  },
  { additionalProperties: s.json() },
);
