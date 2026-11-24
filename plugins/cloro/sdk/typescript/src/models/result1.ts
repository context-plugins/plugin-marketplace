import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { citationPill1Schema, type CitationPill1 } from "./citation-pill1.js";
import { placeInternalSchema, placeSchema, type Place } from "./place.js";
import { shoppingCard1InternalSchema, shoppingCard1Schema, type ShoppingCard1 } from "./shopping-card1.js";
import { source1Schema, type Source1 } from "./source1.js";

/** Gemini response data */
export type Result1 = {
  /** Gemini's response text */
  text?: string;
  /** Gemini's response in Markdown format */
  markdown?: string;
  /** A URL to the full HTML of the response. Expires 24 hours after generation. */
  html?: string;
  /** Sources cited by Gemini */
  sources?: Source1[];
  /**
   * Inline citation pills extracted from the Gemini answer. Each entry is one (pill, source) pair:
   * when a chip cites N sources (Gemini's `+N` analog or section-summary chips), the array contains
   * N entries sharing the same `citationPillId` but with per-source `label`, `url`, and `domain`.
   * Group by `citationPillId` to recover the pill-level structure. `label` is always present on the
   * wire; it can be an empty string when the rail has no title for a source. Omitted from `result`
   * when the answer carries no pills.
   */
  citationPills?: CitationPill1[];
  /** Place cards returned for lodging and local answers */
  places?: Place[];
  /**
   * Product cards Gemini shows on shopping answers, in display order. Field names follow AI Mode's
   * `shoppingCards`. Omitted from `result` when the answer carries no product cards.
   */
  shoppingCards?: ShoppingCard1[];
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

const result1Properties: s.Shape<Result1> = {
  text: s.optional(s.string()),
  markdown: s.optional(s.string()),
  html: s.optional(s.string()),
  sources: s.optional(s.array(s.lazy(() => source1Schema))),
  citationPills: s.optional(s.array(s.lazy(() => citationPill1Schema))),
  places: s.optional(s.array(s.lazy(() => placeInternalSchema))),
  shoppingCards: s.optional(s.array(s.lazy(() => shoppingCard1InternalSchema))),
  rawResponse: s.optional(s.array(s.record(s.string(), s.unknown()))),
};

export const result1InternalSchema: Schema<Result1> = s.object<Result1>(result1Properties, {
  additionalProperties: s.json(),
});

export const result1Schema: Schema<Result1> = s.lazySchema(() =>
  s.object<Result1>(
    {
      ...result1Properties,
      places: s.optional(s.array(s.lazy(() => placeSchema))),
      shoppingCards: s.optional(s.array(s.lazy(() => shoppingCard1Schema))),
    },
    { additionalProperties: s.json() },
  ),
);
