import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CreateUserRequest = {
  /** The ID of an existing collection to which the new UserID needs to be created. */
  collectionId: string;
  /** ID for the UserID to be created. This ID needs to be unique within the collection. */
  userId: string;
  /**
   * Idempotent token used to identify the request to CreateUser. If you use the same token with
   * multiple CreateUser requests, the same response is returned. Use ClientRequestToken to prevent
   * the same request from being processed more than once.
   */
  clientRequestToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createUserRequestSchema: Schema<CreateUserRequest> = s.object<CreateUserRequest>(
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
