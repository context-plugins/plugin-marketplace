import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { faceDetailSchema, type FaceDetail } from "./face-detail.js";
import {
  reasonAmazonRekognitionUserApiSchema,
  type ReasonAmazonRekognitionUserApi,
} from "./reason-amazon-rekognition-user-api.js";

export type UnsearchedFace = {
  faceDetails?: FaceDetail;
  /** Reasons why a face wasn't used for Search. */
  reasons?: ReasonAmazonRekognitionUserApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const unsearchedFaceSchema: Schema<UnsearchedFace> = s.object<UnsearchedFace>(
  {
    faceDetails: s.optional(s.lazy(() => faceDetailSchema)),
    reasons: s.optional(s.array(s.lazy(() => reasonAmazonRekognitionUserApiSchema))),
    _keysMap: {
      faceDetails: "FaceDetails",
      reasons: "Reasons",
    },
  },
  { additionalProperties: s.json() },
);
