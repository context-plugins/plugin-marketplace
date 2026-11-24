import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { field1InternalSchema, field1Schema, type Field1 } from "./unions/field1.js";

export type ApiV1ExtractRequest1 = {
  /** Optional guidance (max 500 chars): what the document is and how to read ambiguous fields. */
  context?: string;
  /**
   * The fields to extract (1-20): field names (<=50 chars), or {name, type, description (<=200
   * chars), required} objects. A short description per field sharpens ambiguous ones. Names must be
   * unique.
   */
  fields?: Field1[];
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
  /** The text to process. Plain text or HTML (tags are handled server-side). */
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

const apiV1ExtractRequest1Properties: s.Shape<ApiV1ExtractRequest1> = {
  context: s.optional(s.string()),
  fields: s.optional(s.array(s.lazy(() => field1InternalSchema))),
  key: s.optional(s.string()),
  returnUsage: s.defaulted(s.boolean(), false),
  text: s.optional(s.string()),
  texts: s.array(s.string()),
  _keysMap: {
    returnUsage: "return_usage",
  },
};

export const apiV1ExtractRequest1InternalSchema: Schema<ApiV1ExtractRequest1> =
  s.object<ApiV1ExtractRequest1>(apiV1ExtractRequest1Properties, { additionalProperties: s.json() });

export const apiV1ExtractRequest1Schema: Schema<ApiV1ExtractRequest1> = s.lazySchema(() =>
  s.object<ApiV1ExtractRequest1>(
    {
      ...apiV1ExtractRequest1Properties,
      context: s.optional(s.string().check(s.maxLength(500))),
      fields: s.optional(s.array(s.lazy(() => field1Schema)).check(s.minLength(1), s.maxLength(20))),
      text: s.optional(s.string().check(s.minLength(1), s.maxLength(10000))),
      texts: s
        .array(s.string().check(s.minLength(1), s.maxLength(10000)))
        .check(s.minLength(1), s.maxLength(10)),
    },
    { additionalProperties: s.json() },
  ),
);
