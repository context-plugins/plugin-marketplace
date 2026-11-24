import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { nameSchema, type Name } from "./unions/name.js";
import { userIdSchema, type UserId } from "./unions/user-id.js";

/** Request model for updating a profile. */
export type ProfileUpdateRequest = {
  /** Optional name for the profile */
  name?: Name;
  /**
   * Your internal user identifier for this profile. Use this to associate a profile with a user in
   * your system.
   */
  userId?: UserId;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const profileUpdateRequestSchema: Schema<ProfileUpdateRequest> = s.object<ProfileUpdateRequest>(
  {
    name: s.optional(s.lazy(() => nameSchema)),
    userId: s.optional(s.lazy(() => userIdSchema)),
  },
  { additionalProperties: s.json() },
);
