import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Eyeglasses = {
  /** Boolean value that indicates whether the face is wearing eye glasses or not. */
  value?: boolean;
  /** Level of confidence in the determination. */
  confidence?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const eyeglassesSchema: Schema<Eyeglasses> = s.object<Eyeglasses>(
  {
    value: s.optional(s.boolean()),
    confidence: s.optional(s.float64()),
    _keysMap: {
      value: "Value",
      confidence: "Confidence",
    },
  },
  { additionalProperties: s.json() },
);
