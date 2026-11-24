import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { source6InternalSchema, source6Schema, type Source6 } from "./source6.js";

/** Grok response data */
export type Result4 = {
  /** Grok's response text */
  text?: string;
  /** A URL to the full HTML of the response. */
  html?: string;
  /** Array of sources referenced in the response with enhanced metadata */
  sources?: Source6[];
  /** Array of search queries Grok used to gather information for the response */
  searchQueries?: string[];
  /** The model identifier used to generate the response */
  model?: string | null;
  /** Grok's response formatted in Markdown (included when include.markdown is true) */
  markdown?: string;
  /**
   * Raw upstream provider stream captured during the request. Each item is one chunk from the
   * provider's wire protocol (SSE event, batchexecute frame, etc.). Format is provider-specific,
   * undocumented, and may change without notice — use it for debugging or to access data not yet
   * surfaced in the structured fields above.
   */
  rawResponse?: Record<string, unknown>[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const result4Properties: s.Shape<Result4> = {
  text: s.optional(s.string()),
  html: s.optional(s.string()),
  sources: s.optional(s.array(s.lazy(() => source6InternalSchema))),
  searchQueries: s.optional(s.array(s.string())),
  model: s.optionalNullable(s.string()),
  markdown: s.optional(s.string()),
  rawResponse: s.optional(s.array(s.record(s.string(), s.unknown()))),
};

export const result4InternalSchema: Schema<Result4> = s.object<Result4>(result4Properties, {
  additionalProperties: s.json(),
});

export const result4Schema: Schema<Result4> = s.lazySchema(() =>
  s.object<Result4>(
    {
      ...result4Properties,
      html: s.optional(s.string().check(s.url())),
      sources: s.optional(s.array(s.lazy(() => source6Schema))),
    },
    { additionalProperties: s.json() },
  ),
);
