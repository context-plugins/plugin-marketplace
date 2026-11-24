import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { faceRecordSchema, type FaceRecord } from "./face-record.js";
import {
  orientationCorrectionAmazonRekognitionFaceCollectionsApiSchema,
  type OrientationCorrectionAmazonRekognitionFaceCollectionsApi,
} from "./orientation-correction-amazon-rekognition-face-collections-api.js";
import { unindexedFaceSchema, type UnindexedFace } from "./unindexed-face.js";

export type IndexFacesResponse = {
  /**
   * An array of faces detected and added to the collection. For more information, see Searching
   * Faces in a Collection in the Amazon Rekognition Developer Guide.
   */
  faceRecords?: FaceRecord[];
  /**
   * If your collection is associated with a face detection model that's later than version 3.0, the
   * value of OrientationCorrection is always null and no orientation information is returned. If
   * your collection is associated with a face detection model that's version 3.0 or earlier, the
   * following applies: If the input image is in .jpeg format, it might contain exchangeable image
   * file format (Exif) metadata that includes the image's orientation. Amazon Rekognition uses this
   * orientation information to perform image correction - the bounding box coordinates are
   * translated to represent object locations
   */
  orientationCorrection?: OrientationCorrectionAmazonRekognitionFaceCollectionsApi;
  /**
   * The version number of the face detection model that's associated with the input collection
   * (CollectionId).
   */
  faceModelVersion?: string;
  /**
   * An array of faces that were detected in the image but weren't indexed. They weren't indexed
   * because the quality filter identified them as low quality, or the MaxFaces request parameter
   * filtered them out. To use the quality filter, you specify the QualityFilter request parameter.
   */
  unindexedFaces?: UnindexedFace[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const indexFacesResponseSchema: Schema<IndexFacesResponse> = s.object<IndexFacesResponse>(
  {
    faceRecords: s.optional(s.array(s.lazy(() => faceRecordSchema))),
    orientationCorrection: s.optional(
      s.lazy(() => orientationCorrectionAmazonRekognitionFaceCollectionsApiSchema),
    ),
    faceModelVersion: s.optional(s.string()),
    unindexedFaces: s.optional(s.array(s.lazy(() => unindexedFaceSchema))),
    _keysMap: {
      faceRecords: "FaceRecords",
      orientationCorrection: "OrientationCorrection",
      faceModelVersion: "FaceModelVersion",
      unindexedFaces: "UnindexedFaces",
    },
  },
  { additionalProperties: s.json() },
);
