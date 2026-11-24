import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Point = {
  /** The value of the X coordinate for a point on a polygon */
  x?: number;
  /** The value of the Y coordinate for a point on a polygon */
  y?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pointSchema: Schema<Point> = s.object<Point>(
  {
    x: s.optional(s.float64()),
    y: s.optional(s.float64()),
    _keysMap: {
      x: "X",
      y: "Y",
    },
  },
  { additionalProperties: s.json() },
);
