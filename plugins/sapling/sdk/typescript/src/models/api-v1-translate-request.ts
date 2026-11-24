import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { formalitySchema, type Formality } from "./formality.js";

export type ApiV1TranslateRequest = {
  /**
   * Optional register: "formal" (vous/Sie/usted) or "informal" (tu/du/tú). Omit for the model
   * default.
   */
  formality?: Formality;
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
   * Optional hint for the source language (same forms as target_lang). The text itself wins if they
   * disagree.
   */
  sourceLang?: string;
  /** Language to translate into: ISO 639 code ("fr", "zh-TW") or English name ("French"). */
  targetLang?: string;
  /**
   * The text to translate. Sent to the model as-is — markup and line structure are preserved, not
   * stripped.
   */
  text: string;
  /**
   * Batch form: 1 to 10 texts, each processed with the same options as a single request. Send
   * exactly one of `text` or `texts`; the response is then {"results": [...]}, one single-text
   * response per input text in input order. Size limits are on the endpoint's docs page -- most cap
   * the combined length of all items at the single-text limit.
   */
  texts?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1TranslateRequestProperties: s.Shape<ApiV1TranslateRequest> = {
  formality: s.optional(s.lazy(() => formalitySchema)),
  key: s.optional(s.string()),
  returnUsage: s.defaulted(s.boolean(), false),
  sourceLang: s.optional(s.string()),
  targetLang: s.optional(s.string()),
  text: s.string(),
  texts: s.optional(s.array(s.string())),
  _keysMap: {
    returnUsage: "return_usage",
    sourceLang: "source_lang",
    targetLang: "target_lang",
  },
};

export const apiV1TranslateRequestInternalSchema: Schema<ApiV1TranslateRequest> =
  s.object<ApiV1TranslateRequest>(apiV1TranslateRequestProperties, { additionalProperties: s.json() });

export const apiV1TranslateRequestSchema: Schema<ApiV1TranslateRequest> = s.lazySchema(() =>
  s.object<ApiV1TranslateRequest>(
    {
      ...apiV1TranslateRequestProperties,
      sourceLang: s.optional(s.string().check(s.maxLength(40))),
      targetLang: s.optional(s.string().check(s.maxLength(40))),
      text: s.string().check(s.minLength(1), s.maxLength(5000)),
      texts: s.optional(
        s.array(s.string().check(s.minLength(1), s.maxLength(5000))).check(s.minLength(1), s.maxLength(10)),
      ),
    },
    { additionalProperties: s.json() },
  ),
);
