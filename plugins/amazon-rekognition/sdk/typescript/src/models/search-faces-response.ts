import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { faceMatchSchema, type FaceMatch } from "./face-match.js";

export type SearchFacesResponse = {
  /** ID of the face that was searched for matches in a collection. */
  searchedFaceId?: string;
  /** An array of faces that matched the input face, along with the confidence in the match. */
  faceMatches?: FaceMatch[];
  /**
   * Version number of the face detection model associated with the input collection (CollectionId).
   */
  faceModelVersion?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const searchFacesResponseSchema: Schema<SearchFacesResponse> = s.object<SearchFacesResponse>(
  {
    searchedFaceId: s.optional(s.string()),
    faceMatches: s.optional(s.array(s.lazy(() => faceMatchSchema))),
    faceModelVersion: s.optional(s.string()),
    _keysMap: {
      searchedFaceId: "SearchedFaceId",
      faceMatches: "FaceMatches",
      faceModelVersion: "FaceModelVersion",
    },
  },
  { additionalProperties: s.json() },
);
