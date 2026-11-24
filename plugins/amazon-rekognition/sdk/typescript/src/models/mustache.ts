import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Mustache = {
  /** Boolean value that indicates whether the face has mustache or not. */
  value?: boolean;
  /** Level of confidence in the determination. */
  confidence?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const mustacheSchema: Schema<Mustache> = s.object<Mustache>(
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
