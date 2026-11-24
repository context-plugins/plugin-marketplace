import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ShotSegment = {
  /** An Identifier for a shot detection segment detected in a video. */
  index?: number;
  /** The confidence that Amazon Rekognition Video has in the accuracy of the detected segment. */
  confidence?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const shotSegmentSchema: Schema<ShotSegment> = s.object<ShotSegment>(
  {
    index: s.optional(s.int()),
    confidence: s.optional(s.float64()),
    _keysMap: {
      index: "Index",
      confidence: "Confidence",
    },
  },
  { additionalProperties: s.json() },
);
