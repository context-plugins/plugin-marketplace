import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ReasonAmazonRekognitionUserApi = {
  FaceNotLargest: "FACE_NOT_LARGEST",
  ExceedsMaxFaces: "EXCEEDS_MAX_FACES",
  ExtremePose: "EXTREME_POSE",
  LowBrightness: "LOW_BRIGHTNESS",
  LowSharpness: "LOW_SHARPNESS",
  LowConfidence: "LOW_CONFIDENCE",
  SmallBoundingBox: "SMALL_BOUNDING_BOX",
  LowFaceQuality: "LOW_FACE_QUALITY",
} as const;
export type ReasonAmazonRekognitionUserApi =
  | (typeof ReasonAmazonRekognitionUserApi)[keyof typeof ReasonAmazonRekognitionUserApi]
  | (string & {});

export const reasonAmazonRekognitionUserApiSchema: EnumSchema<ReasonAmazonRekognitionUserApi> =
  s.enumOf<ReasonAmazonRekognitionUserApi>(ReasonAmazonRekognitionUserApi);
