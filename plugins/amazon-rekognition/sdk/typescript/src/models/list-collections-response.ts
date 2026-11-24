import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ListCollectionsResponse = {
  /** An array of collection IDs. */
  collectionIds?: string[];
  /**
   * If the result is truncated, the response provides a NextToken that you can use in the
   * subsequent request to fetch the next set of collection IDs.
   */
  nextToken?: string;
  /**
   * Version numbers of the face detection models associated with the collections in the array
   * CollectionIds. For example, the value of FaceModelVersions[2] is the version number for the
   * face detection model used by the collection in CollectionId[2].
   */
  faceModelVersions?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listCollectionsResponseSchema: Schema<ListCollectionsResponse> =
  s.object<ListCollectionsResponse>(
    {
      collectionIds: s.optional(s.array(s.string())),
      nextToken: s.optional(s.string()),
      faceModelVersions: s.optional(s.array(s.string())),
      _keysMap: {
        collectionIds: "CollectionIds",
        nextToken: "NextToken",
        faceModelVersions: "FaceModelVersions",
      },
    },
    { additionalProperties: s.json() },
  );
