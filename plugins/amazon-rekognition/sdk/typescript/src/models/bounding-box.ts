import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type BoundingBox = {
  /** Width of the bounding box as a ratio of the overall image width. */
  width?: number;
  /** Height of the bounding box as a ratio of the overall image height. */
  height?: number;
  /** Left coordinate of the bounding box as a ratio of overall image width. */
  left?: number;
  /** Top coordinate of the bounding box as a ratio of overall image height. */
  top?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const boundingBoxSchema: Schema<BoundingBox> = s.object<BoundingBox>(
  {
    width: s.optional(s.float64()),
    height: s.optional(s.float64()),
    left: s.optional(s.float64()),
    top: s.optional(s.float64()),
    _keysMap: {
      width: "Width",
      height: "Height",
      left: "Left",
      top: "Top",
    },
  },
  { additionalProperties: s.json() },
);
