import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Type of landmark. */
export const Type1AmazonRekognitionFaceCollectionsApi = {
  EyeLeft: "eyeLeft",
  EyeRight: "eyeRight",
  Nose: "nose",
  MouthLeft: "mouthLeft",
  MouthRight: "mouthRight",
  LeftEyeBrowLeft: "leftEyeBrowLeft",
  LeftEyeBrowRight: "leftEyeBrowRight",
  LeftEyeBrowUp: "leftEyeBrowUp",
  RightEyeBrowLeft: "rightEyeBrowLeft",
  RightEyeBrowRight: "rightEyeBrowRight",
  RightEyeBrowUp: "rightEyeBrowUp",
  LeftEyeLeft: "leftEyeLeft",
  LeftEyeRight: "leftEyeRight",
  LeftEyeUp: "leftEyeUp",
  LeftEyeDown: "leftEyeDown",
  RightEyeLeft: "rightEyeLeft",
  RightEyeRight: "rightEyeRight",
  RightEyeUp: "rightEyeUp",
  RightEyeDown: "rightEyeDown",
  NoseLeft: "noseLeft",
  NoseRight: "noseRight",
  MouthUp: "mouthUp",
  MouthDown: "mouthDown",
  LeftPupil: "leftPupil",
  RightPupil: "rightPupil",
  UpperJawlineLeft: "upperJawlineLeft",
  MidJawlineLeft: "midJawlineLeft",
  ChinBottom: "chinBottom",
  MidJawlineRight: "midJawlineRight",
  UpperJawlineRight: "upperJawlineRight",
} as const;
export type Type1AmazonRekognitionFaceCollectionsApi =
  | (typeof Type1AmazonRekognitionFaceCollectionsApi)[keyof typeof Type1AmazonRekognitionFaceCollectionsApi]
  | (string & {});

export const type1AmazonRekognitionFaceCollectionsApiSchema: EnumSchema<Type1AmazonRekognitionFaceCollectionsApi> =
  s.enumOf<Type1AmazonRekognitionFaceCollectionsApi>(Type1AmazonRekognitionFaceCollectionsApi);
