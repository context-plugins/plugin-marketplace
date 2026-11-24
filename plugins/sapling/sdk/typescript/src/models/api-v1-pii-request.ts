import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { type1Schema, type Type1 } from "./type1.js";

export type ApiV1PiiRequest = {
  /**
   * Sapling API key. Required when no "Authorization: Bearer <key>" header is sent; when both are
   * sent, the body key takes precedence over the header.
   */
  key?: string;
  /**
   * If true, the response includes redacted_text with every detected entity replaced by its
   * placeholder.
   */
  redact?: boolean;
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
   * The text to scan. Offsets in the response refer to this exact string, so pass raw text (not
   * HTML).
   */
  text: string;
  /**
   * Restrict detection to these PII types. Defaults to all deterministic types; person,
   * organization, and location run only when listed here explicitly.
   */
  types?: Type1[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1PiiRequestSchema: Schema<ApiV1PiiRequest> = s.object<ApiV1PiiRequest>(
  {
    key: s.optional(s.string()),
    redact: s.optional(s.boolean()),
    returnUsage: s.defaulted(s.boolean(), false),
    text: s.string(),
    types: s.optional(s.array(s.lazy(() => type1Schema))),
    _keysMap: {
      returnUsage: "return_usage",
    },
  },
  { additionalProperties: s.json() },
);
