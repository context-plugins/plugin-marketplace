import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1AidetectRequest = {
  /**
   * Also save the result as a shareable report and return its link in report (a single text only,
   * not texts). The report is saved to your AI detector history, where you can revoke the link;
   * anyone with the link can view the text and its scores until it is revoked or expires 90 days
   * after creation. Requires your private API key: OAuth access tokens and public API keys get 400,
   * as does combining it with zero_retention. No report is made (report is null, see
   * report_skip_reason) when your team keeps no data, AI detector history or text retention is
   * turned off, or the account email is unconfirmed; the request is still scored and billed.
   *
   * @default false
   */
  createReport?: boolean;
  /**
   * Sapling API key. Required when no "Authorization: Bearer <key>" header is sent; when both are
   * sent, the body key takes precedence over the header.
   */
  key?: string;
  /**
   * Language of the text: en, de, es, fr, it, ja, nl or pt. Omit (or "auto") to detect it; other
   * languages are rejected.
   */
  lang?: string;
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
  /** Include per-sentence scores (default true). */
  sentScores?: boolean;
  /** The text to process. Plain text or HTML (tags are handled server-side). */
  text: string;
  /**
   * Batch form: 1 to 10 texts, each processed with the same options as a single request. Send
   * exactly one of `text` or `texts`; the response is then {"results": [...]}, one single-text
   * response per input text in input order. Size limits are on the endpoint's docs page -- most cap
   * the combined length of all items at the single-text limit. Requires your own API key; the
   * public demo key is limited to the single `text` form.
   */
  texts?: string[];
  /**
   * Keep no copy of the text: the result is not cached (so no certificate hash), and usage is
   * logged without the text. Default false; always on for teams with data retention disabled.
   */
  zeroRetention?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1AidetectRequestProperties: s.Shape<ApiV1AidetectRequest> = {
  createReport: s.defaulted(s.boolean(), false),
  key: s.optional(s.string()),
  lang: s.optional(s.string()),
  returnUsage: s.defaulted(s.boolean(), false),
  sentScores: s.optional(s.boolean()),
  text: s.string(),
  texts: s.optional(s.array(s.string())),
  zeroRetention: s.optional(s.boolean()),
  _keysMap: {
    createReport: "create_report",
    returnUsage: "return_usage",
    sentScores: "sent_scores",
    zeroRetention: "zero_retention",
  },
};

export const apiV1AidetectRequestInternalSchema: Schema<ApiV1AidetectRequest> =
  s.object<ApiV1AidetectRequest>(apiV1AidetectRequestProperties, { additionalProperties: s.json() });

export const apiV1AidetectRequestSchema: Schema<ApiV1AidetectRequest> = s.lazySchema(() =>
  s.object<ApiV1AidetectRequest>(
    {
      ...apiV1AidetectRequestProperties,
      texts: s.optional(s.array(s.string()).check(s.minLength(1), s.maxLength(10))),
    },
    { additionalProperties: s.json() },
  ),
);
