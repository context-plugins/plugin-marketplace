import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Request payload for creating a new user account */
export type CreateUserRequest = {
  /** Email address for the new user account */
  email: string;
  /** Display name for the new user */
  name: string;
  /** Surname of the new user */
  surname?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const createUserRequestProperties: s.Shape<CreateUserRequest> = {
  email: s.string(),
  name: s.string(),
  surname: s.optional(s.string()),
};

export const createUserRequestInternalSchema: Schema<CreateUserRequest> = s.object<CreateUserRequest>(
  createUserRequestProperties,
  { additionalProperties: s.json() },
);

export const createUserRequestSchema: Schema<CreateUserRequest> = s.lazySchema(() =>
  s.object<CreateUserRequest>(
    {
      ...createUserRequestProperties,
      email: s.string().check(s.email()),
    },
    { additionalProperties: s.json() },
  ),
);
