import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  textDetectionAmazonRekognitionTextDetectionApiSchema,
  type TextDetectionAmazonRekognitionTextDetectionApi,
} from "./text-detection-amazon-rekognition-text-detection-api.js";

export type TextDetectionResult = {
  /**
   * The time, in milliseconds from the start of the video, that the text was detected. Note that
   * Timestamp is not guaranteed to be accurate to the individual frame where the text first
   * appears.
   */
  timestamp?: number;
  textDetection?: TextDetectionAmazonRekognitionTextDetectionApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const textDetectionResultSchema: Schema<TextDetectionResult> = s.object<TextDetectionResult>(
  {
    timestamp: s.optional(s.int()),
    textDetection: s.optional(s.lazy(() => textDetectionAmazonRekognitionTextDetectionApiSchema)),
    _keysMap: {
      timestamp: "Timestamp",
      textDetection: "TextDetection",
    },
  },
  { additionalProperties: s.json() },
);
