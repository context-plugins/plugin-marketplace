import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { user2InternalSchema, user2Schema, type User2 } from "./user2.js";

/** Credentials for user authentication. */
export type LoginRequest = {
  /** User credential object. */
  user: User2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const loginRequestProperties: s.Shape<LoginRequest> = {
  user: user2InternalSchema,
};

export const loginRequestInternalSchema: Schema<LoginRequest> = s.object<LoginRequest>(
  loginRequestProperties,
  { additionalProperties: s.json() },
);

export const loginRequestSchema: Schema<LoginRequest> = s.lazySchema(() =>
  s.object<LoginRequest>(
    {
      ...loginRequestProperties,
      user: user2Schema,
    },
    { additionalProperties: s.json() },
  ),
);
