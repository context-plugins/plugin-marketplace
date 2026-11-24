import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { userInternalSchema, userSchema, type User } from "./user.js";

export type UsersResponse = {
  users?: User[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const usersResponseProperties: s.Shape<UsersResponse> = {
  users: s.optional(s.array(s.lazy(() => userInternalSchema))),
};

export const usersResponseInternalSchema: Schema<UsersResponse> = s.object<UsersResponse>(
  usersResponseProperties,
  { additionalProperties: s.json() },
);

export const usersResponseSchema: Schema<UsersResponse> = s.lazySchema(() =>
  s.object<UsersResponse>(
    {
      ...usersResponseProperties,
      users: s.optional(s.array(s.lazy(() => userSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
