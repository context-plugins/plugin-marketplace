import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ReasonAmazonRekognitionFaceCollectionsApi = {
  ExceedsMaxFaces: "EXCEEDS_MAX_FACES",
  ExtremePose: "EXTREME_POSE",
  LowBrightness: "LOW_BRIGHTNESS",
  LowSharpness: "LOW_SHARPNESS",
  LowConfidence: "LOW_CONFIDENCE",
  SmallBoundingBox: "SMALL_BOUNDING_BOX",
  LowFaceQuality: "LOW_FACE_QUALITY",
} as const;
export type ReasonAmazonRekognitionFaceCollectionsApi =
  | (typeof ReasonAmazonRekognitionFaceCollectionsApi)[keyof typeof ReasonAmazonRekognitionFaceCollectionsApi]
  | (string & {});

export const reasonAmazonRekognitionFaceCollectionsApiSchema: EnumSchema<ReasonAmazonRekognitionFaceCollectionsApi> =
  s.enumOf<ReasonAmazonRekognitionFaceCollectionsApi>(ReasonAmazonRekognitionFaceCollectionsApi);
