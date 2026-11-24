import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { faceDetailSchema, type FaceDetail } from "./face-detail.js";
import {
  reasonAmazonRekognitionFaceCollectionsApiSchema,
  type ReasonAmazonRekognitionFaceCollectionsApi,
} from "./reason-amazon-rekognition-face-collections-api.js";

export type UnindexedFace = {
  /**
   * An array of reasons that specify why a face wasn't indexed. EXTREME_POSE - The face is at a
   * pose that can't be detected. For example, the head is turned too far away from the camera.
   * EXCEEDS_MAX_FACES - The number of faces detected is already higher than that specified by the
   * MaxFaces input parameter for IndexFaces. LOW_BRIGHTNESS - The image is too dark. LOW_SHARPNESS
   * - The image is too blurry. LOW_CONFIDENCE - The face was detected with a low confidence.
   * SMALL_BOUNDING_BOX - The bounding box around the face is too small.
   */
  reasons?: ReasonAmazonRekognitionFaceCollectionsApi[];
  faceDetail?: FaceDetail;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const unindexedFaceSchema: Schema<UnindexedFace> = s.object<UnindexedFace>(
  {
    reasons: s.optional(s.array(s.lazy(() => reasonAmazonRekognitionFaceCollectionsApiSchema))),
    faceDetail: s.optional(s.lazy(() => faceDetailSchema)),
    _keysMap: {
      reasons: "Reasons",
      faceDetail: "FaceDetail",
    },
  },
  { additionalProperties: s.json() },
);
