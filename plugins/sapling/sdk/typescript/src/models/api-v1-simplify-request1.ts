import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { readingLevelSchema, type ReadingLevel } from "./reading-level.js";

export type ApiV1SimplifyRequest1 = {
  /**
   * Sapling API key. Required when no "Authorization: Bearer <key>" header is sent; when both are
   * sent, the body key takes precedence over the header.
   */
  key?: string;
  /**
   * ISO 639-1 code used to pick the readability formula for the before/after scores and the billed
   * language. Omit for auto-detection (falls back to "en"). The rewrite itself always stays in the
   * text's own language.
   */
  lang?: string;
  /** Terms the rewrite must keep exactly as written (product names, defined legal terms). */
  preserveTerms?: string[];
  /**
   * Target audience: "plain" (plain-language style for a general audience, the default),
   * "elementary" (~US grade 3-5), "middle_school" (~grade 6-8) or "high_school" (~grade 9-10).
   */
  readingLevel?: ReadingLevel;
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
   * The text to simplify. Sent to the model as-is — markup and line structure are preserved, not
   * stripped.
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

const apiV1SimplifyRequest1Properties: s.Shape<ApiV1SimplifyRequest1> = {
  key: s.optional(s.string()),
  lang: s.optional(s.string()),
  preserveTerms: s.optional(s.array(s.string())),
  readingLevel: s.optional(s.lazy(() => readingLevelSchema)),
  returnUsage: s.defaulted(s.boolean(), false),
  text: s.optional(s.string()),
  texts: s.array(s.string()),
  _keysMap: {
    preserveTerms: "preserve_terms",
    readingLevel: "reading_level",
    returnUsage: "return_usage",
  },
};

export const apiV1SimplifyRequest1InternalSchema: Schema<ApiV1SimplifyRequest1> =
  s.object<ApiV1SimplifyRequest1>(apiV1SimplifyRequest1Properties, { additionalProperties: s.json() });

export const apiV1SimplifyRequest1Schema: Schema<ApiV1SimplifyRequest1> = s.lazySchema(() =>
  s.object<ApiV1SimplifyRequest1>(
    {
      ...apiV1SimplifyRequest1Properties,
      lang: s.optional(s.string().check(s.minLength(2), s.maxLength(20), s.pattern("\\S"))),
      preserveTerms: s.optional(
        s.array(s.string().check(s.minLength(1), s.maxLength(100), s.pattern("\\S"))).check(s.maxLength(20)),
      ),
      text: s.optional(s.string().check(s.minLength(1), s.maxLength(5000), s.pattern("\\S"))),
      texts: s
        .array(s.string().check(s.minLength(1), s.maxLength(5000), s.pattern("\\S")))
        .check(s.minLength(1), s.maxLength(10)),
    },
    { additionalProperties: s.json() },
  ),
);
