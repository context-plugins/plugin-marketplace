import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SearchFacesRequest = {
  /** ID of the collection the face belongs to. */
  collectionId: string;
  /** ID of a face to find matches for in the collection. */
  faceId: string;
  /**
   * Maximum number of faces to return. The operation returns the maximum number of faces with the
   * highest confidence in the match.
   */
  maxFaces?: number;
  /**
   * Optional value specifying the minimum confidence in the face match to return. For example,
   * don't return any matches where confidence in matches is less than 70%. The default value is
   * 80%.
   */
  faceMatchThreshold?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const searchFacesRequestSchema: Schema<SearchFacesRequest> = s.object<SearchFacesRequest>(
  {
    collectionId: s.string(),
    faceId: s.string(),
    maxFaces: s.optional(s.int()),
    faceMatchThreshold: s.optional(s.float64()),
    _keysMap: {
      collectionId: "CollectionId",
      faceId: "FaceId",
      maxFaces: "MaxFaces",
      faceMatchThreshold: "FaceMatchThreshold",
    },
  },
  { additionalProperties: s.json() },
);
