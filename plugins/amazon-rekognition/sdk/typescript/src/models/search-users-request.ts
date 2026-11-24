import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SearchUsersRequest = {
  /**
   * The ID of an existing collection containing the UserID, used with a UserId or FaceId. If a
   * FaceId is provided, UserId isn’t required to be present in the Collection.
   */
  collectionId: string;
  /** ID for the existing User. */
  userId?: string;
  /** ID for the existing face. */
  faceId?: string;
  /**
   * Optional value that specifies the minimum confidence in the matched UserID to return. Default
   * value of 80.
   */
  userMatchThreshold?: number;
  /** Maximum number of identities to return. */
  maxUsers?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const searchUsersRequestSchema: Schema<SearchUsersRequest> = s.object<SearchUsersRequest>(
  {
    collectionId: s.string(),
    userId: s.optional(s.string()),
    faceId: s.optional(s.string()),
    userMatchThreshold: s.optional(s.float64()),
    maxUsers: s.optional(s.int()),
    _keysMap: {
      collectionId: "CollectionId",
      userId: "UserId",
      faceId: "FaceId",
      userMatchThreshold: "UserMatchThreshold",
      maxUsers: "MaxUsers",
    },
  },
  { additionalProperties: s.json() },
);
