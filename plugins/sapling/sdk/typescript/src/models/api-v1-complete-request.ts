import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1CompleteRequest = {
  /**
   * Sapling API key. Required when no "Authorization: Bearer <key>" header is sent; when both are
   * sent, the body key takes precedence over the header.
   */
  key?: string;
  /**
   * The partial text to continue, at most 200 characters. Send the end of what the user has typed,
   * not the whole document.
   */
  query: string;
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
  /** Optional stable identifier for the document or conversation being written. */
  sessionId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1CompleteRequestProperties: s.Shape<ApiV1CompleteRequest> = {
  key: s.optional(s.string()),
  query: s.string(),
  returnUsage: s.defaulted(s.boolean(), false),
  sessionId: s.optional(s.string()),
  _keysMap: {
    returnUsage: "return_usage",
    sessionId: "session_id",
  },
};

export const apiV1CompleteRequestInternalSchema: Schema<ApiV1CompleteRequest> =
  s.object<ApiV1CompleteRequest>(apiV1CompleteRequestProperties, { additionalProperties: s.json() });

export const apiV1CompleteRequestSchema: Schema<ApiV1CompleteRequest> = s.lazySchema(() =>
  s.object<ApiV1CompleteRequest>(
    {
      ...apiV1CompleteRequestProperties,
      query: s.string().check(s.maxLength(200)),
    },
    { additionalProperties: s.json() },
  ),
);
