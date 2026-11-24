import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Attribute = {
  Default: "DEFAULT",
  All: "ALL",
  AgeRange: "AGE_RANGE",
  Beard: "BEARD",
  Emotions: "EMOTIONS",
  EyeDirection: "EYE_DIRECTION",
  Eyeglasses: "EYEGLASSES",
  EyesOpen: "EYES_OPEN",
  Gender: "GENDER",
  MouthOpen: "MOUTH_OPEN",
  Mustache: "MUSTACHE",
  FaceOccluded: "FACE_OCCLUDED",
  Smile: "SMILE",
  Sunglasses: "SUNGLASSES",
} as const;
export type Attribute = (typeof Attribute)[keyof typeof Attribute] | (string & {});

export const attributeSchema: EnumSchema<Attribute> = s.enumOf<Attribute>(Attribute);
