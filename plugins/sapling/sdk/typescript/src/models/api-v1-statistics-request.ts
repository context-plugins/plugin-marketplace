import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1StatisticsRequest = {
  /**
   * Sapling API key. Required when no "Authorization: Bearer <key>" header is sent; when both are
   * sent, the body key takes precedence over the header.
   */
  key?: string;
  /** ISO 639-1 language code of the text. Defaults to "en". */
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
  /** The text to process. Plain text or HTML (tags are handled server-side). */
  text: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1StatisticsRequestSchema: Schema<ApiV1StatisticsRequest> = s.object<ApiV1StatisticsRequest>(
  {
    key: s.optional(s.string()),
    lang: s.optional(s.string()),
    returnUsage: s.defaulted(s.boolean(), false),
    text: s.string(),
    _keysMap: {
      returnUsage: "return_usage",
    },
  },
  { additionalProperties: s.json() },
);
