import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  user2ContentstackContentManagementUsersApiSchema,
  type User2ContentstackContentManagementUsersApi,
} from "./user2-contentstack-content-management-users-api.js";

/** Fields to update on the user profile. */
export type UpdateUserRequest = {
  /** User profile fields to update. */
  user?: User2ContentstackContentManagementUsersApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateUserRequestSchema: Schema<UpdateUserRequest> = s.object<UpdateUserRequest>(
  {
    user: s.optional(s.lazy(() => user2ContentstackContentManagementUsersApiSchema)),
  },
  { additionalProperties: s.json() },
);
