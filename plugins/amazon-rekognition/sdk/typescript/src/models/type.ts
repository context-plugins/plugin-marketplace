import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Type of landmark. */
export const Type = {
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
export type Type = (typeof Type)[keyof typeof Type] | (string & {});

export const typeSchema: EnumSchema<Type> = s.enumOf<Type>(Type);
