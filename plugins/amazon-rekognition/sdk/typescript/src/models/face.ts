import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { boundingBoxSchema, type BoundingBox } from "./bounding-box.js";

export type Face = {
  /** Unique identifier that Amazon Rekognition assigns to the face. */
  faceId?: string;
  boundingBox?: BoundingBox;
  /** Unique identifier that Amazon Rekognition assigns to the input image. */
  imageId?: string;
  /** Identifier that you assign to all the faces in the input image. */
  externalImageId?: string;
  /**
   * Confidence level that the bounding box contains a face (and not a different object such as a
   * tree).
   */
  confidence?: number;
  /**
   * The version of the face detect and storage model that was used when indexing the face vector.
   */
  indexFacesModelVersion?: string;
  /** Unique identifier assigned to the user. */
  userId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const faceSchema: Schema<Face> = s.object<Face>(
  {
    faceId: s.optional(s.string()),
    boundingBox: s.optional(s.lazy(() => boundingBoxSchema)),
    imageId: s.optional(s.string()),
    externalImageId: s.optional(s.string()),
    confidence: s.optional(s.float64()),
    indexFacesModelVersion: s.optional(s.string()),
    userId: s.optional(s.string()),
    _keysMap: {
      faceId: "FaceId",
      boundingBox: "BoundingBox",
      imageId: "ImageId",
      externalImageId: "ExternalImageId",
      confidence: "Confidence",
      indexFacesModelVersion: "IndexFacesModelVersion",
      userId: "UserId",
    },
  },
  { additionalProperties: s.json() },
);
