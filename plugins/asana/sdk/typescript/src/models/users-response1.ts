import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { userResponseInternalSchema, userResponseSchema, type UserResponse } from "./user-response.js";

export type UsersResponse1 = {
  data?: UserResponse;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const usersResponse1Properties: s.Shape<UsersResponse1> = {
  data: s.optional(s.lazy(() => userResponseInternalSchema)),
};

export const usersResponse1InternalSchema: Schema<UsersResponse1> = s.object<UsersResponse1>(
  usersResponse1Properties,
  { additionalProperties: s.json() },
);

export const usersResponse1Schema: Schema<UsersResponse1> = s.lazySchema(() =>
  s.object<UsersResponse1>(
    {
      ...usersResponse1Properties,
      data: s.optional(s.lazy(() => userResponseSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
