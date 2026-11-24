import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { boundingBoxSchema, type BoundingBox } from "./bounding-box.js";
import { faceDetailSchema, type FaceDetail } from "./face-detail.js";
import { knownGenderSchema, type KnownGender } from "./known-gender.js";

export type CelebrityDetail = {
  /** An array of URLs pointing to additional celebrity information. */
  urls?: string[];
  /** The name of the celebrity. */
  name?: string;
  /** The unique identifier for the celebrity. */
  id?: string;
  /**
   * The confidence, in percentage, that Amazon Rekognition has that the recognized face is the
   * celebrity.
   */
  confidence?: number;
  boundingBox?: BoundingBox;
  face?: FaceDetail;
  knownGender?: KnownGender;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const celebrityDetailSchema: Schema<CelebrityDetail> = s.object<CelebrityDetail>(
  {
    urls: s.optional(s.array(s.string())),
    name: s.optional(s.string()),
    id: s.optional(s.string()),
    confidence: s.optional(s.float64()),
    boundingBox: s.optional(s.lazy(() => boundingBoxSchema)),
    face: s.optional(s.lazy(() => faceDetailSchema)),
    knownGender: s.optional(s.lazy(() => knownGenderSchema)),
    _keysMap: {
      urls: "Urls",
      name: "Name",
      id: "Id",
      confidence: "Confidence",
      boundingBox: "BoundingBox",
      face: "Face",
      knownGender: "KnownGender",
    },
  },
  { additionalProperties: s.json() },
);
