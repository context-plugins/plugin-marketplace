import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type BoundingBox = {
  /** The height of the bounding box as a ratio of the overall document page height. */
  height?: number;
  /** The left coordinate of the bounding box as a ratio of overall document page width. */
  left?: number;
  /** The top coordinate of the bounding box as a ratio of overall document page height. */
  top?: number;
  /** The width of the bounding box as a ratio of the overall document page width. */
  width?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const boundingBoxSchema: Schema<BoundingBox> = s.object<BoundingBox>(
  {
    height: s.optional(s.float64()),
    left: s.optional(s.float64()),
    top: s.optional(s.float64()),
    width: s.optional(s.float64()),
    _keysMap: {
      height: "Height",
      left: "Left",
      top: "Top",
      width: "Width",
    },
  },
  { additionalProperties: s.json() },
);
