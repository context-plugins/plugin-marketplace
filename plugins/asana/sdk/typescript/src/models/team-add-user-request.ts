import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A user identification object for specification with the addUser/removeUser endpoints. */
export type TeamAddUserRequest = {
  /**
   * A string identifying a user. This can either be the string "me", an email, or the gid of a
   * user.
   */
  user?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const teamAddUserRequestSchema: Schema<TeamAddUserRequest> = s.object<TeamAddUserRequest>(
  {
    user: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
