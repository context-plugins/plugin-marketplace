import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A Contentstack user account. */
export type User = {
  /** Unique identifier of the user. */
  uid?: string;
  /** User's first name. */
  firstName?: string;
  /** User's last name. */
  lastName?: string;
  /** User's email address. */
  email?: string;
  /** Session authentication token. Only returned on login. */
  authtoken?: string;
  /** ISO 8601 timestamp when the user account was created. */
  createdAt?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const userProperties: s.Shape<User> = {
  uid: s.optional(s.string()),
  firstName: s.optional(s.string()),
  lastName: s.optional(s.string()),
  email: s.optional(s.string()),
  authtoken: s.optional(s.string()),
  createdAt: s.optional(s.dateTime()),
  _keysMap: {
    firstName: "first_name",
    lastName: "last_name",
    createdAt: "created_at",
  },
};

export const userInternalSchema: Schema<User> = s.object<User>(userProperties, {
  additionalProperties: s.json(),
});

export const userSchema: Schema<User> = s.lazySchema(() =>
  s.object<User>(
    {
      ...userProperties,
      email: s.optional(s.string().check(s.email())),
    },
    { additionalProperties: s.json() },
  ),
);
