import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** User credential object. */
export type User2 = {
  /** The user's email address. */
  email: string;
  /** The user's account password. */
  password: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const user2Properties: s.Shape<User2> = {
  email: s.string(),
  password: s.string(),
};

export const user2InternalSchema: Schema<User2> = s.object<User2>(user2Properties, {
  additionalProperties: s.json(),
});

export const user2Schema: Schema<User2> = s.lazySchema(() =>
  s.object<User2>(
    {
      ...user2Properties,
      email: s.string().check(s.email()),
    },
    { additionalProperties: s.json() },
  ),
);
