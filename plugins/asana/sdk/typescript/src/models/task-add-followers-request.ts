import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TaskAddFollowersRequest = {
  /**
   * An array of strings identifying users. These can either be the string "me", an email, or the
   * gid of a user.
   */
  followers: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const taskAddFollowersRequestSchema: Schema<TaskAddFollowersRequest> =
  s.object<TaskAddFollowersRequest>(
    {
      followers: s.array(s.string()),
    },
    { additionalProperties: s.json() },
  );
