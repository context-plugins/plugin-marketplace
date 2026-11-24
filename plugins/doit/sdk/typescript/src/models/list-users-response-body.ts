import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { userListItemInternalSchema, userListItemSchema, type UserListItem } from "./user-list-item.js";

/** Response body for the list users endpoint. */
export type ListUsersResponseBody = {
  users?: UserListItem[];
  /** The number of returned records. */
  rowCount?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const listUsersResponseBodyProperties: s.Shape<ListUsersResponseBody> = {
  users: s.optional(s.array(s.lazy(() => userListItemInternalSchema))),
  rowCount: s.optional(s.int()),
};

export const listUsersResponseBodyInternalSchema: Schema<ListUsersResponseBody> =
  s.object<ListUsersResponseBody>(listUsersResponseBodyProperties, { additionalProperties: s.json() });

export const listUsersResponseBodySchema: Schema<ListUsersResponseBody> = s.lazySchema(() =>
  s.object<ListUsersResponseBody>(
    {
      ...listUsersResponseBodyProperties,
      users: s.optional(s.array(s.lazy(() => userListItemSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
