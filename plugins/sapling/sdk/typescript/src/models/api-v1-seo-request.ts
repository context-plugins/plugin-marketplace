import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1SeoRequest = {
  /**
   * Sapling API key. Required when no "Authorization: Bearer <key>" header is sent; when both are
   * sent, the body key takes precedence over the header.
   */
  key?: string;
  /**
   * Target keyword phrases, most important first (max 10). Each is measured in the text and steered
   * into the suggestions.
   */
  keywords?: string[];
  /**
   * ISO 639-1 language code of the text (default "en"). Selects the readability formulas; supported
   * for en, de, es, fr, it, nl, pl, ru — other codes are accepted and get null readability.
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
   * Generate titles/meta descriptions/slug/keywords with the LLM (default true). false =
   * deterministic stats only.
   */
  suggestions?: boolean;
  /** The text to process. Plain text or HTML (tags are handled server-side). */
  text: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1SeoRequestProperties: s.Shape<ApiV1SeoRequest> = {
  key: s.optional(s.string()),
  keywords: s.optional(s.array(s.string())),
  lang: s.optional(s.string()),
  returnUsage: s.defaulted(s.boolean(), false),
  suggestions: s.optional(s.boolean()),
  text: s.string(),
  _keysMap: {
    returnUsage: "return_usage",
  },
};

export const apiV1SeoRequestInternalSchema: Schema<ApiV1SeoRequest> = s.object<ApiV1SeoRequest>(
  apiV1SeoRequestProperties,
  { additionalProperties: s.json() },
);

export const apiV1SeoRequestSchema: Schema<ApiV1SeoRequest> = s.lazySchema(() =>
  s.object<ApiV1SeoRequest>(
    {
      ...apiV1SeoRequestProperties,
      keywords: s.optional(s.array(s.string()).check(s.maxLength(10))),
    },
    { additionalProperties: s.json() },
  ),
);
