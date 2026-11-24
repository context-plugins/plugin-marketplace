import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1EditsAcceptRequest = {
  /**
   * Sapling API key. Required when no "Authorization: Bearer <key>" header is sent; when both are
   * sent, the body key takes precedence over the header.
   */
  key?: string;
  /**
   * When true, a successful JSON-object response additionally carries "usage": {"characters": <n>}
   * — the billable character count this request submitted (0 for unbilled requests; the 2.5x
   * adjustment for logographic languages is included, so CJK requests report more than their raw
   * length). Repeat texts inside the billing deduplication window are still counted here even
   * though they are not re-charged, so the number is an upper bound on the final charge. Responses
   * whose body is not a JSON object (e.g. bare-array response formats) cannot carry the field. An
   * existing usage field (such as account/status or completion token usage) is preserved unchanged.
   *
   * @default false
   */
  returnUsage?: boolean;
  /** Optional session identifier used to group feedback events. */
  sessionId?: string;
  /**
   * Your identifier for the end user. The feedback is acknowledged but NOT recorded when omitted.
   */
  userId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1EditsAcceptRequestProperties: s.Shape<ApiV1EditsAcceptRequest> = {
  key: s.optional(s.string()),
  returnUsage: s.defaulted(s.boolean(), false),
  sessionId: s.optional(s.string()),
  userId: s.optional(s.string()),
  _keysMap: {
    returnUsage: "return_usage",
    sessionId: "session_id",
    userId: "user_id",
  },
};

export const apiV1EditsAcceptRequestInternalSchema: Schema<ApiV1EditsAcceptRequest> =
  s.object<ApiV1EditsAcceptRequest>(apiV1EditsAcceptRequestProperties, { additionalProperties: s.json() });

export const apiV1EditsAcceptRequestSchema: Schema<ApiV1EditsAcceptRequest> = s.lazySchema(() =>
  s.object<ApiV1EditsAcceptRequest>(
    {
      ...apiV1EditsAcceptRequestProperties,
      userId: s.optional(s.string().check(s.maxLength(100))),
    },
    { additionalProperties: s.json() },
  ),
);
