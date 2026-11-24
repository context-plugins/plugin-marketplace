import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A user account in the UiPath organization */
export type User2 = {
  /** Unique identifier of the user */
  id?: string;
  /** Display name of the user */
  name?: string;
  /** Email address of the user */
  email?: string;
  /** Whether the user account is active */
  isActive?: boolean;
  /** ISO 8601 timestamp when the user was created */
  createdOn?: Date;
  /** ISO 8601 timestamp of the user's most recent login */
  lastLoginDate?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const user2Properties: s.Shape<User2> = {
  id: s.optional(s.string()),
  name: s.optional(s.string()),
  email: s.optional(s.string()),
  isActive: s.optional(s.boolean()),
  createdOn: s.optional(s.dateTime()),
  lastLoginDate: s.optional(s.dateTime()),
};

export const user2InternalSchema: Schema<User2> = s.object<User2>(user2Properties, {
  additionalProperties: s.json(),
});

export const user2Schema: Schema<User2> = s.lazySchema(() =>
  s.object<User2>(
    {
      ...user2Properties,
      email: s.optional(s.string().check(s.email())),
    },
    { additionalProperties: s.json() },
  ),
);
