import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { userActionInternalSchema, userActionSchema, type UserAction } from "./user-action.js";

export type UserList = {
  id: string;
  firstname?: string;
  lastname?: string;
  groupName?: string;
  email?: string | null;
  mobile?: string;
  businessName?: string;
  userActions?: UserAction[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const userListProperties: s.Shape<UserList> = {
  id: s.string(),
  firstname: s.optional(s.string()),
  lastname: s.optional(s.string()),
  groupName: s.optional(s.string()),
  email: s.optionalNullable(s.string()),
  mobile: s.optional(s.string()),
  businessName: s.optional(s.string()),
  userActions: s.optional(s.array(s.lazy(() => userActionInternalSchema))),
};

export const userListInternalSchema: Schema<UserList> = s.object<UserList>(userListProperties, {
  additionalProperties: s.json(),
});

export const userListSchema: Schema<UserList> = s.lazySchema(() =>
  s.object<UserList>(
    {
      ...userListProperties,
      userActions: s.optional(s.array(s.lazy(() => userActionSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
