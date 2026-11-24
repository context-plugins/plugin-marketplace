import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { userSchema, type User } from "./user.js";

export type ListUsersResponse = {
  /** List of UsersID associated with the specified collection. */
  users?: User[];
  /** A pagination token to be used with the subsequent request if the response is truncated. */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listUsersResponseSchema: Schema<ListUsersResponse> = s.object<ListUsersResponse>(
  {
    users: s.optional(s.array(s.lazy(() => userSchema))),
    nextToken: s.optional(s.string()),
    _keysMap: {
      users: "Users",
      nextToken: "NextToken",
    },
  },
  { additionalProperties: s.json() },
);
