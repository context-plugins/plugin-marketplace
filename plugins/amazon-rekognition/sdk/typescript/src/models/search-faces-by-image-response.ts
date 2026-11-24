import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { boundingBoxSchema, type BoundingBox } from "./bounding-box.js";
import { faceMatchSchema, type FaceMatch } from "./face-match.js";

export type SearchFacesByImageResponse = {
  searchedFaceBoundingBox?: BoundingBox;
  /** The level of confidence that the searchedFaceBoundingBox, contains a face. */
  searchedFaceConfidence?: number;
  /** An array of faces that match the input face, along with the confidence in the match. */
  faceMatches?: FaceMatch[];
  /**
   * Version number of the face detection model associated with the input collection (CollectionId).
   */
  faceModelVersion?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const searchFacesByImageResponseSchema: Schema<SearchFacesByImageResponse> =
  s.object<SearchFacesByImageResponse>(
    {
      searchedFaceBoundingBox: s.optional(s.lazy(() => boundingBoxSchema)),
      searchedFaceConfidence: s.optional(s.float64()),
      faceMatches: s.optional(s.array(s.lazy(() => faceMatchSchema))),
      faceModelVersion: s.optional(s.string()),
      _keysMap: {
        searchedFaceBoundingBox: "SearchedFaceBoundingBox",
        searchedFaceConfidence: "SearchedFaceConfidence",
        faceMatches: "FaceMatches",
        faceModelVersion: "FaceModelVersion",
      },
    },
    { additionalProperties: s.json() },
  );
