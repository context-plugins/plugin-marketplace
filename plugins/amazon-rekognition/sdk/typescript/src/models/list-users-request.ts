import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ListUsersRequest = {
  /** The ID of an existing collection. */
  collectionId: string;
  /** Maximum number of UsersID to return. */
  maxResults?: number;
  /** Pagingation token to receive the next set of UsersID. */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listUsersRequestSchema: Schema<ListUsersRequest> = s.object<ListUsersRequest>(
  {
    collectionId: s.string(),
    maxResults: s.optional(s.int()),
    nextToken: s.optional(s.string()),
    _keysMap: {
      collectionId: "CollectionId",
      maxResults: "MaxResults",
      nextToken: "NextToken",
    },
  },
  { additionalProperties: s.json() },
);
