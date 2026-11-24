import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RemoveFollowersRequest = {
  /**
   * An array of strings identifying users. These can either be the string "me", an email, or the
   * gid of a user.
   */
  followers: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const removeFollowersRequestSchema: Schema<RemoveFollowersRequest> = s.object<RemoveFollowersRequest>(
  {
    followers: s.string(),
  },
  { additionalProperties: s.json() },
);
