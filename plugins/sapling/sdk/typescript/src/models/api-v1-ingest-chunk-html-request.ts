import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1IngestChunkHtmlRequest = {
  html: string;
  /**
   * Sapling API key. Required when no "Authorization: Bearer <key>" header is sent; when both are
   * sent, the body key takes precedence over the header.
   */
  key?: string;
  /** Maximum chunk length in characters. Required in practice: omitting it answers 400. */
  maxLength: number;
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
  /** Characters to advance between chunk starts; 0 means 10% of max_length. @default 0 */
  stepSize?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1IngestChunkHtmlRequestProperties: s.Shape<ApiV1IngestChunkHtmlRequest> = {
  html: s.string(),
  key: s.optional(s.string()),
  maxLength: s.int(),
  returnUsage: s.defaulted(s.boolean(), false),
  stepSize: s.defaulted(s.int(), 0),
  _keysMap: {
    maxLength: "max_length",
    returnUsage: "return_usage",
    stepSize: "step_size",
  },
};

export const apiV1IngestChunkHtmlRequestInternalSchema: Schema<ApiV1IngestChunkHtmlRequest> =
  s.object<ApiV1IngestChunkHtmlRequest>(apiV1IngestChunkHtmlRequestProperties, {
    additionalProperties: s.json(),
  });

export const apiV1IngestChunkHtmlRequestSchema: Schema<ApiV1IngestChunkHtmlRequest> = s.lazySchema(() =>
  s.object<ApiV1IngestChunkHtmlRequest>(
    {
      ...apiV1IngestChunkHtmlRequestProperties,
      maxLength: s.int().check(s.gte(1)),
      stepSize: s.defaulted(s.int().check(s.gte(0)), 0),
    },
    { additionalProperties: s.json() },
  ),
);
