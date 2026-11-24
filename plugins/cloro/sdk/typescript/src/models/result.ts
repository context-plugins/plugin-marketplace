import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { citationPillSchema, type CitationPill } from "./citation-pill.js";
import { mapInternalSchema, mapSchema, type Map } from "./map.js";
import { shoppingCardSchema, type ShoppingCard } from "./shopping-card.js";
import { sourceSchema, type Source } from "./source.js";

/** Copilot response data */
export type Result = {
  /** Copilot's response text */
  text?: string;
  /** A URL to the full HTML of the response. */
  html?: string;
  /** Array of sources referenced in the response */
  sources?: Source[];
  /**
   * Inline citation pills extracted from the Copilot answer. Each entry is one (pill, source) pair:
   * when a pill cites N sources (consecutive citation events grouped into a single chip), the array
   * contains N entries sharing the same `citationPillId` but carrying per-source `label`, `url`,
   * and `domain`. Group by `citationPillId` to recover the pill-level structure. Omitted from
   * `result` when the answer carries no pills.
   */
  citationPills?: CitationPill[];
  /** Array of shopping/product cards extracted from the response (when available) */
  shoppingCards?: ShoppingCard[];
  /** Array of business/place map entries extracted from the response (when available) */
  map?: Map[];
  /**
   * Array of query fan-out — the web search queries Copilot ran while generating the response.
   * Automatically included when at least one is available, no surcharge.
   */
  searchQueries?: string[];
  /** Copilot's response formatted in Markdown (included when include.markdown is true) */
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

const resultProperties: s.Shape<Result> = {
  text: s.optional(s.string()),
  html: s.optional(s.string()),
  sources: s.optional(s.array(s.lazy(() => sourceSchema))),
  citationPills: s.optional(s.array(s.lazy(() => citationPillSchema))),
  shoppingCards: s.optional(s.array(s.lazy(() => shoppingCardSchema))),
  map: s.optional(s.array(s.lazy(() => mapInternalSchema))),
  searchQueries: s.optional(s.array(s.string())),
  markdown: s.optional(s.string()),
  rawResponse: s.optional(s.array(s.record(s.string(), s.unknown()))),
};

export const resultInternalSchema: Schema<Result> = s.object<Result>(resultProperties, {
  additionalProperties: s.json(),
});

export const resultSchema: Schema<Result> = s.lazySchema(() =>
  s.object<Result>(
    {
      ...resultProperties,
      html: s.optional(s.string().check(s.url())),
      map: s.optional(s.array(s.lazy(() => mapSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
