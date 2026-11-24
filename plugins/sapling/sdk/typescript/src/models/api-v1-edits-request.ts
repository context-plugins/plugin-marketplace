import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { varietySchema, type Variety } from "./variety.js";

export type ApiV1EditsRequest = {
  /** If true, the response includes applied_text with all edits applied to the input. */
  autoApply?: boolean;
  /**
   * Defaults to true. If false, edits omit error_type, general_error_type and classifier-generated
   * descriptions; corrections, offsets, IDs and applied_text are unchanged.
   */
  includeErrorCategories?: boolean;
  /**
   * Sapling API key. Required when no "Authorization: Bearer <key>" header is sent; when both are
   * sent, the body key takes precedence over the header.
   */
  key?: string;
  /** ISO 639-1 language code of the text (e.g. "en", "de", "fr"). Defaults to "en". */
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
   * Optional stable identifier for the document or conversation being checked. Reuse the same value
   * when re-checking the same document.
   */
  sessionId?: string;
  /** The text to process. Plain text or HTML (tags are handled server-side). */
  text: string;
  /** English variety to enforce, e.g. "us-variety" or "gb-variety". Optional. */
  variety?: Variety;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1EditsRequestSchema: Schema<ApiV1EditsRequest> = s.object<ApiV1EditsRequest>(
  {
    autoApply: s.optional(s.boolean()),
    includeErrorCategories: s.optional(s.boolean()),
    key: s.optional(s.string()),
    lang: s.optional(s.string()),
    returnUsage: s.defaulted(s.boolean(), false),
    sessionId: s.optional(s.string()),
    text: s.string(),
    variety: s.optional(s.lazy(() => varietySchema)),
    _keysMap: {
      autoApply: "auto_apply",
      includeErrorCategories: "include_error_categories",
      returnUsage: "return_usage",
      sessionId: "session_id",
    },
  },
  { additionalProperties: s.json() },
);
