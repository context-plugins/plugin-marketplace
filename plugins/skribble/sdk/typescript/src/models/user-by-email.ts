import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UserByEmail = {
  /** Email address of the user. */
  email: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const userByEmailProperties: s.Shape<UserByEmail> = {
  email: s.string(),
};

export const userByEmailInternalSchema: Schema<UserByEmail> = s.object<UserByEmail>(userByEmailProperties, {
  additionalProperties: s.json(),
});

export const userByEmailSchema: Schema<UserByEmail> = s.lazySchema(() =>
  s.object<UserByEmail>(
    {
      ...userByEmailProperties,
      email: s.string().check(s.email()),
    },
    { additionalProperties: s.json() },
  ),
);
