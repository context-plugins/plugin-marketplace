import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Beard = {
  /** Boolean value that indicates whether the face has beard or not. */
  value?: boolean;
  /** Level of confidence in the determination. */
  confidence?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const beardSchema: Schema<Beard> = s.object<Beard>(
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
