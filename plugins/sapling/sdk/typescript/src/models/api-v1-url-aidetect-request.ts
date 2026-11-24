import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1UrlAidetectRequest = {
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
   * Language of the page: en, de, es, fr, it, ja, nl or pt. Omit (or "auto") to detect it; other
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
  /**
   * Also return score_string, an HTML rendering of the scored text highlighted by score (default
   * false).
   */
  scoreString?: boolean;
  /** Include per-sentence scores (default true). */
  sentScores?: boolean;
  /** The http(s) URL of the page or document to check. A bare host/path gets https://. */
  url: string;
  /** Pin a detector model version. Omit for the default. */
  version?: string;
  /**
   * Keep no copy of the text: the result is not cached (so no certificate hash), and usage is
   * logged without the text. Default false; always on for teams with data retention disabled.
   */
  zeroRetention?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1UrlAidetectRequestProperties: s.Shape<ApiV1UrlAidetectRequest> = {
  createReport: s.defaulted(s.boolean(), false),
  key: s.optional(s.string()),
  lang: s.optional(s.string()),
  returnUsage: s.defaulted(s.boolean(), false),
  scoreString: s.optional(s.boolean()),
  sentScores: s.optional(s.boolean()),
  url: s.string(),
  version: s.optional(s.string()),
  zeroRetention: s.optional(s.boolean()),
  _keysMap: {
    createReport: "create_report",
    returnUsage: "return_usage",
    scoreString: "score_string",
    sentScores: "sent_scores",
    zeroRetention: "zero_retention",
  },
};

export const apiV1UrlAidetectRequestInternalSchema: Schema<ApiV1UrlAidetectRequest> =
  s.object<ApiV1UrlAidetectRequest>(apiV1UrlAidetectRequestProperties, { additionalProperties: s.json() });

export const apiV1UrlAidetectRequestSchema: Schema<ApiV1UrlAidetectRequest> = s.lazySchema(() =>
  s.object<ApiV1UrlAidetectRequest>(
    {
      ...apiV1UrlAidetectRequestProperties,
      url: s.string().check(s.maxLength(2048)),
    },
    { additionalProperties: s.json() },
  ),
);
