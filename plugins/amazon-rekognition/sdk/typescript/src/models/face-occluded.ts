import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type FaceOccluded = {
  /**
   * True if a detected face’s eyes, nose, and mouth are partially captured or if they are covered
   * by masks, dark sunglasses, cell phones, hands, or other objects. False if common occurrences
   * that do not impact face verification are detected, such as eye glasses, lightly tinted
   * sunglasses, strands of hair, and others.
   */
  value?: boolean;
  /** The confidence that the service has detected the presence of a face occlusion. */
  confidence?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const faceOccludedSchema: Schema<FaceOccluded> = s.object<FaceOccluded>(
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
