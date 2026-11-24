import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { type6Schema, type Type6 } from "./type6.js";

export type TechnicalCueSegment = {
  /** The type of the technical cue. */
  type?: Type6;
  /** The confidence that Amazon Rekognition Video has in the accuracy of the detected segment. */
  confidence?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const technicalCueSegmentSchema: Schema<TechnicalCueSegment> = s.object<TechnicalCueSegment>(
  {
    type: s.optional(s.lazy(() => type6Schema)),
    confidence: s.optional(s.float64()),
    _keysMap: {
      type: "Type",
      confidence: "Confidence",
    },
  },
  { additionalProperties: s.json() },
);
