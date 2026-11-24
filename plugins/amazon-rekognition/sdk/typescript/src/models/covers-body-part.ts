import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CoversBodyPart = {
  /** The confidence that Amazon Rekognition has in the value of Value. */
  confidence?: number;
  /** True if the PPE covers the corresponding body part, otherwise false. */
  value?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const coversBodyPartSchema: Schema<CoversBodyPart> = s.object<CoversBodyPart>(
  {
    confidence: s.optional(s.float64()),
    value: s.optional(s.boolean()),
    _keysMap: {
      confidence: "Confidence",
      value: "Value",
    },
  },
  { additionalProperties: s.json() },
);
