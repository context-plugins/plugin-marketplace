import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { userInternalSchema, userSchema, type User } from "./user.js";

/** Paginated response containing user records */
export type UserListResponse = {
  /** Total number of users */
  totalCount?: number;
  users?: User[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const userListResponseProperties: s.Shape<UserListResponse> = {
  totalCount: s.optional(s.int()),
  users: s.optional(s.array(s.lazy(() => userInternalSchema))),
};

export const userListResponseInternalSchema: Schema<UserListResponse> = s.object<UserListResponse>(
  userListResponseProperties,
  { additionalProperties: s.json() },
);

export const userListResponseSchema: Schema<UserListResponse> = s.lazySchema(() =>
  s.object<UserListResponse>(
    {
      ...userListResponseProperties,
      users: s.optional(s.array(s.lazy(() => userSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
