import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  typeAmazonRekognitionFaceCollectionsApiSchema,
  type TypeAmazonRekognitionFaceCollectionsApi,
} from "./type-amazon-rekognition-face-collections-api.js";

export type EmotionAmazonRekognitionFaceCollectionsApi = {
  /** Type of emotion detected. */
  type?: TypeAmazonRekognitionFaceCollectionsApi;
  /** Level of confidence in the determination. */
  confidence?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const emotionAmazonRekognitionFaceCollectionsApiSchema: Schema<EmotionAmazonRekognitionFaceCollectionsApi> =
  s.object<EmotionAmazonRekognitionFaceCollectionsApi>(
    {
      type: s.optional(s.lazy(() => typeAmazonRekognitionFaceCollectionsApiSchema)),
      confidence: s.optional(s.float64()),
      _keysMap: {
        type: "Type",
        confidence: "Confidence",
      },
    },
    { additionalProperties: s.json() },
  );
