import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { mappingSchema, type Mapping } from "./mapping.js";
import { tenseMappingSchema, type TenseMapping } from "./tense-mapping.js";
import { toneMappingSchema, type ToneMapping } from "./tone-mapping.js";

export type ApiV1RephraseRequest = {
  /**
   * Sapling API key. Required when no "Authorization: Bearer <key>" header is sent; when both are
   * sent, the body key takes precedence over the header.
   */
  key?: string;
  /** Transformation to apply. Defaults to "paraphrase". */
  mapping?: Mapping;
  /** Number of alternatives to return (default 5). */
  numResults?: number;
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
  /** Target tense. Only used with mapping="switch_tense". */
  tenseMapping?: TenseMapping;
  /** The text to process. Plain text or HTML (tags are handled server-side). */
  text: string;
  /** Target tone. Only used with mapping="switch_tone". */
  toneMapping?: ToneMapping;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1RephraseRequestSchema: Schema<ApiV1RephraseRequest> = s.object<ApiV1RephraseRequest>(
  {
    key: s.optional(s.string()),
    mapping: s.optional(s.lazy(() => mappingSchema)),
    numResults: s.optional(s.int()),
    returnUsage: s.defaulted(s.boolean(), false),
    tenseMapping: s.optional(s.lazy(() => tenseMappingSchema)),
    text: s.string(),
    toneMapping: s.optional(s.lazy(() => toneMappingSchema)),
    _keysMap: {
      numResults: "num_results",
      returnUsage: "return_usage",
      tenseMapping: "tense_mapping",
      toneMapping: "tone_mapping",
    },
  },
  { additionalProperties: s.json() },
);
