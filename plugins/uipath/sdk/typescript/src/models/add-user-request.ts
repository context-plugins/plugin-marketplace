import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Request payload for adding a new user to Automation Hub */
export type AddUserRequest = {
  /** Email address of the user to add */
  email: string;
  /** Role to assign to the user */
  role: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const addUserRequestProperties: s.Shape<AddUserRequest> = {
  email: s.string(),
  role: s.string(),
};

export const addUserRequestInternalSchema: Schema<AddUserRequest> = s.object<AddUserRequest>(
  addUserRequestProperties,
  { additionalProperties: s.json() },
);

export const addUserRequestSchema: Schema<AddUserRequest> = s.lazySchema(() =>
  s.object<AddUserRequest>(
    {
      ...addUserRequestProperties,
      email: s.string().check(s.email()),
    },
    { additionalProperties: s.json() },
  ),
);
