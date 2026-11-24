import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type MouthOpen = {
  /** Boolean value that indicates whether the mouth on the face is open or not. */
  value?: boolean;
  /** Level of confidence in the determination. */
  confidence?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const mouthOpenSchema: Schema<MouthOpen> = s.object<MouthOpen>(
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
