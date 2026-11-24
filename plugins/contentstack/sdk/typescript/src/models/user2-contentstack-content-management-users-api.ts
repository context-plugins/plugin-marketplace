import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** User profile fields to update. */
export type User2ContentstackContentManagementUsersApi = {
  /** Updated first name. */
  firstName?: string;
  /** Updated last name. */
  lastName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const user2ContentstackContentManagementUsersApiSchema: Schema<User2ContentstackContentManagementUsersApi> =
  s.object<User2ContentstackContentManagementUsersApi>(
    {
      firstName: s.optional(s.string()),
      lastName: s.optional(s.string()),
      _keysMap: {
        firstName: "first_name",
        lastName: "last_name",
      },
    },
    { additionalProperties: s.json() },
  );
