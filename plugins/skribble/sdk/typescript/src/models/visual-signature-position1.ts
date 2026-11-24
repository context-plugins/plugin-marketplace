import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Position where the signature should appear. */
export type VisualSignaturePosition1 = {
  /** Page number (0-indexed) where the signature appears. This is a String and not a number! */
  page?: string;
  /** Height of the signature in pixels. */
  height?: number;
  /** Width of the signature in pixels. */
  width?: number;
  /** X-coordinate (pixels from left) of signature. */
  x?: number;
  /** Y-coordinate (pixels from top) of signature. */
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

export const visualSignaturePosition1Schema: Schema<VisualSignaturePosition1> =
  s.object<VisualSignaturePosition1>(
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
