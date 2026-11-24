import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeleteUserRequest = {
  /** The ID of an existing collection from which the UserID needs to be deleted. */
  collectionId: string;
  /** ID for the UserID to be deleted. */
  userId: string;
  /**
   * Idempotent token used to identify the request to DeleteUser. If you use the same token with
   * multiple DeleteUser requests, the same response is returned. Use ClientRequestToken to prevent
   * the same request from being processed more than once.
   */
  clientRequestToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteUserRequestSchema: Schema<DeleteUserRequest> = s.object<DeleteUserRequest>(
  {
    collectionId: s.string(),
    userId: s.string(),
    clientRequestToken: s.optional(s.string()),
    _keysMap: {
      collectionId: "CollectionId",
      userId: "UserId",
      clientRequestToken: "ClientRequestToken",
    },
  },
  { additionalProperties: s.json() },
);
