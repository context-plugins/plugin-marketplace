import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  updatedUserBodyInternalSchema,
  updatedUserBodySchema,
  type UpdatedUserBody,
} from "./updated-user-body.js";

/** Response of a user update operation. */
export type UpdateUserResponse = {
  /** Success message */
  message?: string;
  /** The updated user record. */
  user?: UpdatedUserBody;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const updateUserResponseProperties: s.Shape<UpdateUserResponse> = {
  message: s.optional(s.string()),
  user: s.optional(s.lazy(() => updatedUserBodyInternalSchema)),
};

export const updateUserResponseInternalSchema: Schema<UpdateUserResponse> = s.object<UpdateUserResponse>(
  updateUserResponseProperties,
  { additionalProperties: s.json() },
);

export const updateUserResponseSchema: Schema<UpdateUserResponse> = s.lazySchema(() =>
  s.object<UpdateUserResponse>(
    {
      ...updateUserResponseProperties,
      user: s.optional(s.lazy(() => updatedUserBodySchema)),
    },
    { additionalProperties: s.json() },
  ),
);
