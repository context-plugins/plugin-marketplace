import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * When the shape value is List, it indicates that the values field contains a list of slot values.
 * When the value is Scalar, it indicates that the value field contains a single value.
 */
export const Shape1 = {
  Scalar: "Scalar",
  List: "List",
  Composite: "Composite",
} as const;
export type Shape1 = (typeof Shape1)[keyof typeof Shape1] | (string & {});

export const shape1Schema: EnumSchema<Shape1> = s.enumOf<Shape1>(Shape1);
