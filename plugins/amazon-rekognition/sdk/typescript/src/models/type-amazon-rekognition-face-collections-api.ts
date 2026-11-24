import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Type of emotion detected. */
export const TypeAmazonRekognitionFaceCollectionsApi = {
  Happy: "HAPPY",
  Sad: "SAD",
  Angry: "ANGRY",
  Confused: "CONFUSED",
  Disgusted: "DISGUSTED",
  Surprised: "SURPRISED",
  Calm: "CALM",
  Unknown: "UNKNOWN",
  Fear: "FEAR",
} as const;
export type TypeAmazonRekognitionFaceCollectionsApi =
  | (typeof TypeAmazonRekognitionFaceCollectionsApi)[keyof typeof TypeAmazonRekognitionFaceCollectionsApi]
  | (string & {});

export const typeAmazonRekognitionFaceCollectionsApiSchema: EnumSchema<TypeAmazonRekognitionFaceCollectionsApi> =
  s.enumOf<TypeAmazonRekognitionFaceCollectionsApi>(TypeAmazonRekognitionFaceCollectionsApi);
