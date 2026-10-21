import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Coordinate data for faces and custom regions. */
export type CoordinatesResponse = {
  /** Detected face coordinate rectangles [x, y, width, height]. */
  faces?: number[][];
  /** Custom coordinate rectangles [x, y, width, height]. */
  custom?: number[][];
};

export const coordinatesResponseSchema: Schema<CoordinatesResponse> = s.object<CoordinatesResponse>({
  faces: s.optional(s.array(s.array(s.int()))),
  custom: s.optional(s.array(s.array(s.float64()))),
});
