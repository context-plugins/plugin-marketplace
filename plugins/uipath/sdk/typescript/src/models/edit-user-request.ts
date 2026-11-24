import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Request payload for updating an existing user in Automation Hub */
export type EditUserRequest = {
  /** Unique identifier of the user to update */
  id: number;
  /** Updated role to assign to the user */
  role?: string;
  /** Updated active status for the user account */
  isActive?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const editUserRequestSchema: Schema<EditUserRequest> = s.object<EditUserRequest>(
  {
    id: s.int(),
    role: s.optional(s.string()),
    isActive: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
