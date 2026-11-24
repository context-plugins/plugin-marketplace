import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Response confirming user deletion. */
export type DeleteUserResponse = {
  /** Success message */
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteUserResponseSchema: Schema<DeleteUserResponse> = s.object<DeleteUserResponse>(
  {
    message: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
