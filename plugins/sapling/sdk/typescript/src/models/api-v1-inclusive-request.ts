import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { categorySchema, type Category } from "./category.js";

export type ApiV1InclusiveRequest = {
  /** Categories to check. Default: all of them. */
  categories?: Category[];
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
  /** The text to check. Checked as submitted — markup is not stripped. */
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

const apiV1InclusiveRequestProperties: s.Shape<ApiV1InclusiveRequest> = {
  categories: s.optional(s.array(s.lazy(() => categorySchema))),
  key: s.optional(s.string()),
  returnUsage: s.defaulted(s.boolean(), false),
  text: s.string(),
  texts: s.optional(s.array(s.string())),
  _keysMap: {
    returnUsage: "return_usage",
  },
};

export const apiV1InclusiveRequestInternalSchema: Schema<ApiV1InclusiveRequest> =
  s.object<ApiV1InclusiveRequest>(apiV1InclusiveRequestProperties, { additionalProperties: s.json() });

export const apiV1InclusiveRequestSchema: Schema<ApiV1InclusiveRequest> = s.lazySchema(() =>
  s.object<ApiV1InclusiveRequest>(
    {
      ...apiV1InclusiveRequestProperties,
      categories: s.optional(s.array(s.lazy(() => categorySchema)).check(s.minLength(1))),
      text: s.string().check(s.minLength(1), s.maxLength(10000), s.pattern("\\S")),
      texts: s.optional(
        s
          .array(s.string().check(s.minLength(1), s.maxLength(10000), s.pattern("\\S")))
          .check(s.minLength(1), s.maxLength(10)),
      ),
    },
    { additionalProperties: s.json() },
  ),
);
