import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { typeSaplingDetectionApiSchema, type TypeSaplingDetectionApi } from "./type-sapling-detection-api.js";

export type ApiV1NerRequest = {
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
   * The text to analyze. Offsets index this exact string — HTML is not stripped, so pass the form
   * you want spans into.
   */
  text: string;
  /**
   * Batch form: 1 to 10 texts, each processed with the same options as a single request. Send
   * exactly one of `text` or `texts`; the response is then {"results": [...]}, one single-text
   * response per input text in input order. Size limits are on the endpoint's docs page -- most cap
   * the combined length of all items at the single-text limit.
   */
  texts?: string[];
  /** Entity types to recognize. Default: all of them. */
  types?: TypeSaplingDetectionApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1NerRequestProperties: s.Shape<ApiV1NerRequest> = {
  key: s.optional(s.string()),
  returnUsage: s.defaulted(s.boolean(), false),
  text: s.string(),
  texts: s.optional(s.array(s.string())),
  types: s.optional(s.array(s.lazy(() => typeSaplingDetectionApiSchema))),
  _keysMap: {
    returnUsage: "return_usage",
  },
};

export const apiV1NerRequestInternalSchema: Schema<ApiV1NerRequest> = s.object<ApiV1NerRequest>(
  apiV1NerRequestProperties,
  { additionalProperties: s.json() },
);

export const apiV1NerRequestSchema: Schema<ApiV1NerRequest> = s.lazySchema(() =>
  s.object<ApiV1NerRequest>(
    {
      ...apiV1NerRequestProperties,
      text: s.string().check(s.minLength(1), s.maxLength(10000)),
      texts: s.optional(
        s.array(s.string().check(s.minLength(1), s.maxLength(10000))).check(s.minLength(1), s.maxLength(10)),
      ),
      types: s.optional(s.array(s.lazy(() => typeSaplingDetectionApiSchema)).check(s.minLength(1))),
    },
    { additionalProperties: s.json() },
  ),
);
