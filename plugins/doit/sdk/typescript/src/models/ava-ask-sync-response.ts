import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Ava's response. On success, `answer` is present. The endpoint streams keep-alive whitespace while
 * generating (to avoid proxy timeouts), so the HTTP status is committed to 200 before the answer is
 * ready; if generation then fails, `answer` is omitted and `error` carries a message instead.
 * Consumers should check for `error` before reading `answer`.
 */
export type AvaAskSyncResponse = {
  /** The Ava response text. Present on success. */
  answer?: string;
  /**
   * The conversation ID. Present only for non-ephemeral requests. Can be used with the delete
   * conversation endpoint.
   */
  conversationId?: string;
  /**
   * The answer ID within the conversation. Present only for non-ephemeral requests. Required for
   * the feedback endpoint.
   */
  answerId?: string;
  /**
   * Present instead of `answer` when generation fails after the response has begun streaming (the
   * HTTP status remains 200). A human-readable error message.
   */
  error?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const avaAskSyncResponseSchema: Schema<AvaAskSyncResponse> = s.object<AvaAskSyncResponse>(
  {
    answer: s.optional(s.string()),
    conversationId: s.optional(s.string()),
    answerId: s.optional(s.string()),
    error: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
