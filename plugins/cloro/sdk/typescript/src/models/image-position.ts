import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Pixel offset for image positioning within a slot */
export type ImagePosition = {
  x: number;
  y: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const imagePositionSchema: Schema<ImagePosition> = s.object<ImagePosition>(
  {
    x: s.float64(),
    y: s.float64(),
  },
  { additionalProperties: s.json() },
);
