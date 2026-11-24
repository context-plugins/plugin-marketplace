import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1QualityRequest1 = {
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
   * Also return the LLM rubric: overall + clarity/coherence/correctness/concision scores, summary
   * and quoted issues with suggested rewrites (default false).
   */
  rubric?: boolean;
  /** Also return a 1-5 score per sentence (default false). */
  sentenceScores?: boolean;
  /**
   * The plain text to score. HTML is not stripped — pass markup-free text so tags are not scored as
   * words.
   */
  text?: string;
  /**
   * Batch form: 1 to 10 texts, each processed with the same options as a single request. Send
   * exactly one of `text` or `texts`; the response is then {"results": [...]}, one single-text
   * response per input text in input order. Size limits are on the endpoint's docs page -- most cap
   * the combined length of all items at the single-text limit.
   */
  texts: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1QualityRequest1Properties: s.Shape<ApiV1QualityRequest1> = {
  key: s.optional(s.string()),
  returnUsage: s.defaulted(s.boolean(), false),
  rubric: s.optional(s.boolean()),
  sentenceScores: s.optional(s.boolean()),
  text: s.optional(s.string()),
  texts: s.array(s.string()),
  _keysMap: {
    returnUsage: "return_usage",
    sentenceScores: "sentence_scores",
  },
};

export const apiV1QualityRequest1InternalSchema: Schema<ApiV1QualityRequest1> =
  s.object<ApiV1QualityRequest1>(apiV1QualityRequest1Properties, { additionalProperties: s.json() });

export const apiV1QualityRequest1Schema: Schema<ApiV1QualityRequest1> = s.lazySchema(() =>
  s.object<ApiV1QualityRequest1>(
    {
      ...apiV1QualityRequest1Properties,
      texts: s.array(s.string()).check(s.minLength(1), s.maxLength(10)),
    },
    { additionalProperties: s.json() },
  ),
);
