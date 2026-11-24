import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { textDetectionSchema, type TextDetection } from "./text-detection.js";

export type DetectTextResponse = {
  /** An array of text that was detected in the input image. */
  textDetections?: TextDetection[];
  /** The model version used to detect text. */
  textModelVersion?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const detectTextResponseSchema: Schema<DetectTextResponse> = s.object<DetectTextResponse>(
  {
    textDetections: s.optional(s.array(s.lazy(() => textDetectionSchema))),
    textModelVersion: s.optional(s.string()),
    _keysMap: {
      textDetections: "TextDetections",
      textModelVersion: "TextModelVersion",
    },
  },
  { additionalProperties: s.json() },
);
