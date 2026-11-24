import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { typeSchema, type Type } from "./type.js";

export type Landmark = {
  /** Type of landmark. */
  type?: Type;
  /**
   * The x-coordinate of the landmark expressed as a ratio of the width of the image. The
   * x-coordinate is measured from the left-side of the image. For example, if the image is 700
   * pixels wide and the x-coordinate of the landmark is at 350 pixels, this value is 0.5.
   */
  x?: number;
  /**
   * The y-coordinate of the landmark expressed as a ratio of the height of the image. The
   * y-coordinate is measured from the top of the image. For example, if the image height is 200
   * pixels and the y-coordinate of the landmark is at 50 pixels, this value is 0.25.
   */
  y?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const landmarkSchema: Schema<Landmark> = s.object<Landmark>(
  {
    type: s.optional(s.lazy(() => typeSchema)),
    x: s.optional(s.float64()),
    y: s.optional(s.float64()),
    _keysMap: {
      type: "Type",
      x: "X",
      y: "Y",
    },
  },
  { additionalProperties: s.json() },
);
