import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * When the shape value is List, it indicates that the values field contains a list of slot values.
 * When the value is Scalar, it indicates that the value field contains a single value.
 */
export const Shape = {
  Scalar: "Scalar",
  List: "List",
} as const;
export type Shape = (typeof Shape)[keyof typeof Shape] | (string & {});

export const shapeSchema: EnumSchema<Shape> = s.enumOf<Shape>(Shape);
