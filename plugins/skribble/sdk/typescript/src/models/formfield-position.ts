import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type FormfieldPosition = {
  /** Page number (0-indexed) where the field appears. This is a String and not a number! */
  page?: string;
  /** Height of the field in pixels. */
  height?: number;
  /** Width of the field in pixels. */
  width?: number;
  /** X-coordinate (pixels from left) of field. */
  x?: number;
  /** Y-coordinate (pixels from top) of field. */
  y?: number;
  /**
   * Defines a rotation of the field content. If used in context with a form field, then only the
   * values 0, 90, 180, 270 are legal. Otherwise every value is legal. The rotation is applied
   * counter clockwise.
   */
  rotation?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const formfieldPositionSchema: Schema<FormfieldPosition> = s.object<FormfieldPosition>(
  {
    page: s.optional(s.string()),
    height: s.optional(s.float64()),
    width: s.optional(s.float64()),
    x: s.optional(s.float64()),
    y: s.optional(s.float64()),
    rotation: s.optional(s.float64()),
  },
  { additionalProperties: s.json() },
);
