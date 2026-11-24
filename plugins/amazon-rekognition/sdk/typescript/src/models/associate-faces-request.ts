import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AssociateFacesRequest = {
  /** The ID of an existing collection containing the UserID. */
  collectionId: string;
  /** The ID for the existing UserID. */
  userId: string;
  /** An array of FaceIDs to associate with the UserID. */
  faceIds: string[];
  /**
   * An optional value specifying the minimum confidence in the UserID match to return. The default
   * value is 75.
   */
  userMatchThreshold?: number;
  /**
   * Idempotent token used to identify the request to AssociateFaces. If you use the same token with
   * multiple AssociateFaces requests, the same response is returned. Use ClientRequestToken to
   * prevent the same request from being processed more than once.
   */
  clientRequestToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const associateFacesRequestSchema: Schema<AssociateFacesRequest> = s.object<AssociateFacesRequest>(
  {
    collectionId: s.string(),
    userId: s.string(),
    faceIds: s.array(s.string()),
    userMatchThreshold: s.optional(s.float64()),
    clientRequestToken: s.optional(s.string()),
    _keysMap: {
      collectionId: "CollectionId",
      userId: "UserId",
      faceIds: "FaceIds",
      userMatchThreshold: "UserMatchThreshold",
      clientRequestToken: "ClientRequestToken",
    },
  },
  { additionalProperties: s.json() },
);
