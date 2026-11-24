import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ListFacesRequest = {
  /** ID of the collection from which to list the faces. */
  collectionId: string;
  /**
   * If the previous response was incomplete (because there is more data to retrieve), Amazon
   * Rekognition returns a pagination token in the response. You can use this pagination token to
   * retrieve the next set of faces.
   */
  nextToken?: string;
  /** Maximum number of faces to return. */
  maxResults?: number;
  /** An array of user IDs to filter results with when listing faces in a collection. */
  userId?: string;
  /** An array of face IDs to filter results with when listing faces in a collection. */
  faceIds?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listFacesRequestSchema: Schema<ListFacesRequest> = s.object<ListFacesRequest>(
  {
    collectionId: s.string(),
    nextToken: s.optional(s.string()),
    maxResults: s.optional(s.int()),
    userId: s.optional(s.string()),
    faceIds: s.optional(s.array(s.string())),
    _keysMap: {
      collectionId: "CollectionId",
      nextToken: "NextToken",
      maxResults: "MaxResults",
      userId: "UserId",
      faceIds: "FaceIds",
    },
  },
  { additionalProperties: s.json() },
);
