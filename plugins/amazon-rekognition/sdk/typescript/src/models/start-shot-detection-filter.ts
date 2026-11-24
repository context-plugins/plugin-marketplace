import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type StartShotDetectionFilter = {
  /**
   * Specifies the minimum confidence that Amazon Rekognition Video must have in order to return a
   * detected segment. Confidence represents how certain Amazon Rekognition is that a segment is
   * correctly identified. 0 is the lowest confidence. 100 is the highest confidence. Amazon
   * Rekognition Video doesn't return any segments with a confidence level lower than this specified
   * value. If you don't specify MinSegmentConfidence, the GetSegmentDetection returns segments with
   * confidence values greater than or equal to 50 percent.
   */
  minSegmentConfidence?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startShotDetectionFilterSchema: Schema<StartShotDetectionFilter> =
  s.object<StartShotDetectionFilter>(
    {
      minSegmentConfidence: s.optional(s.float64()),
      _keysMap: {
        minSegmentConfidence: "MinSegmentConfidence",
      },
    },
    { additionalProperties: s.json() },
  );
