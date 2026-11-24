import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PostsTestSendData = {
  /** Number of test sends remaining for the publication today. */
  remainingTestSends: number;
  /**
   * Unix timestamp when the daily test send limit resets. Null if no test sends have been sent
   * today.
   */
  resetAt?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const postsTestSendDataSchema: Schema<PostsTestSendData> = s.object<PostsTestSendData>(
  {
    remainingTestSends: s.int(),
    resetAt: s.optional(s.int()),
    _keysMap: {
      remainingTestSends: "remaining_test_sends",
      resetAt: "reset_at",
    },
  },
  { additionalProperties: s.json() },
);
