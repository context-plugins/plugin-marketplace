import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type User = {
  id?: string;
  name?: string;
  email?: string;
  avatarUrl?: string;
  createdAt?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const userProperties: s.Shape<User> = {
  id: s.optional(s.string()),
  name: s.optional(s.string()),
  email: s.optional(s.string()),
  avatarUrl: s.optional(s.string()),
  createdAt: s.optional(s.dateTime()),
  _keysMap: {
    avatarUrl: "avatar_url",
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
      avatarUrl: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
