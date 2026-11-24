import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1SafetyRequest = {
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
  /**
   * true = also return the offending passages as spans with offsets and per-passage scores. Default
   * false.
   */
  spans?: boolean;
  /** The text to process. Plain text or HTML (tags are handled server-side). */
  text: string;
  /**
   * Batch form: 1 to 10 texts, each processed with the same options as a single request. Send
   * exactly one of `text` or `texts`; the response is then {"results": [...]}, one single-text
   * response per input text in input order. Size limits are on the endpoint's docs page -- most cap
   * the combined length of all items at the single-text limit.
   */
  texts?: string[];
  /** Flagging cut-off on each category score (default 0.5). */
  threshold?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1SafetyRequestProperties: s.Shape<ApiV1SafetyRequest> = {
  key: s.optional(s.string()),
  returnUsage: s.defaulted(s.boolean(), false),
  spans: s.optional(s.boolean()),
  text: s.string(),
  texts: s.optional(s.array(s.string())),
  threshold: s.optional(s.float64()),
  _keysMap: {
    returnUsage: "return_usage",
  },
};

export const apiV1SafetyRequestInternalSchema: Schema<ApiV1SafetyRequest> = s.object<ApiV1SafetyRequest>(
  apiV1SafetyRequestProperties,
  { additionalProperties: s.json() },
);

export const apiV1SafetyRequestSchema: Schema<ApiV1SafetyRequest> = s.lazySchema(() =>
  s.object<ApiV1SafetyRequest>(
    {
      ...apiV1SafetyRequestProperties,
      text: s.string().check(s.minLength(1), s.maxLength(20000)),
      texts: s.optional(
        s.array(s.string().check(s.minLength(1), s.maxLength(20000))).check(s.minLength(1), s.maxLength(10)),
      ),
      threshold: s.optional(s.float64().check(s.gte(0), s.lte(1))),
    },
    { additionalProperties: s.json() },
  ),
);
