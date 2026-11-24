import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { label1InternalSchema, label1Schema, type Label1 } from "./unions/label1.js";

export type ApiV1ClassifyRequest1 = {
  /** Optional guidance (max 500 chars): what the texts are and how to decide borderline cases. */
  context?: string;
  /**
   * Sapling API key. Required when no "Authorization: Bearer <key>" header is sent; when both are
   * sent, the body key takes precedence over the header.
   */
  key?: string;
  /**
   * The candidate labels (2-20): label names (<=50 chars), or {name, description (<=200 chars)}
   * objects. Names must be unique.
   */
  labels?: Label1[];
  /**
   * true = several labels may apply at once (labels = those scoring >= threshold). Default false =
   * exactly one label.
   */
  multiLabel?: boolean;
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
  text?: string;
  /**
   * Batch form: 1 to 10 texts, each processed with the same options as a single request. Send
   * exactly one of `text` or `texts`; the response is then {"results": [...]}, one single-text
   * response per input text in input order. Size limits are on the endpoint's docs page -- most cap
   * the combined length of all items at the single-text limit.
   */
  texts: string[];
  /** Multi-label cut-off on the per-label score (default 0.5). Ignored in single-label mode. */
  threshold?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1ClassifyRequest1Properties: s.Shape<ApiV1ClassifyRequest1> = {
  context: s.optional(s.string()),
  key: s.optional(s.string()),
  labels: s.optional(s.array(s.lazy(() => label1InternalSchema))),
  multiLabel: s.optional(s.boolean()),
  returnUsage: s.defaulted(s.boolean(), false),
  text: s.optional(s.string()),
  texts: s.array(s.string()),
  threshold: s.optional(s.float64()),
  _keysMap: {
    multiLabel: "multi_label",
    returnUsage: "return_usage",
  },
};

export const apiV1ClassifyRequest1InternalSchema: Schema<ApiV1ClassifyRequest1> =
  s.object<ApiV1ClassifyRequest1>(apiV1ClassifyRequest1Properties, { additionalProperties: s.json() });

export const apiV1ClassifyRequest1Schema: Schema<ApiV1ClassifyRequest1> = s.lazySchema(() =>
  s.object<ApiV1ClassifyRequest1>(
    {
      ...apiV1ClassifyRequest1Properties,
      context: s.optional(s.string().check(s.maxLength(500))),
      labels: s.optional(s.array(s.lazy(() => label1Schema)).check(s.minLength(2), s.maxLength(20))),
      text: s.optional(s.string().check(s.minLength(1), s.maxLength(10000))),
      texts: s
        .array(s.string().check(s.minLength(1), s.maxLength(10000)))
        .check(s.minLength(1), s.maxLength(10)),
      threshold: s.optional(s.float64().check(s.gte(0), s.lte(1))),
    },
    { additionalProperties: s.json() },
  ),
);
