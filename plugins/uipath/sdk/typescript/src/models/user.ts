import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A user in Automation Hub */
export type User = {
  /** Unique integer identifier of the user */
  id?: number;
  /** Display name of the user */
  name?: string;
  /** Email address of the user */
  email?: string;
  /** Role assigned to the user in Automation Hub */
  role?: string;
  /** Whether the user account is active */
  isActive?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const userProperties: s.Shape<User> = {
  id: s.optional(s.int()),
  name: s.optional(s.string()),
  email: s.optional(s.string()),
  role: s.optional(s.string()),
  isActive: s.optional(s.boolean()),
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
