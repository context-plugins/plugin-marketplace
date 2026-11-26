import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { modeSchema, type Mode } from "./mode.js";
import { sortSchema, type Sort } from "./sort.js";

/** How `/api/news/search/` read the query. */
export type NewsSearchQueryInfo = {
  /** See the endpoint description. */
  mode: Mode;
  /**
   * `relevance` (ranked) or `published` (newest first) — the latter when every word is too common
   * to rank on.
   */
  sort: Sort;
  /** The normalized words that were searched. */
  terms: string[];
  /**
   * In `broadened` mode, the words at least one of which every row carries, when the search reports
   * them; empty otherwise (the current engine does not — `search_match.terms_matched` on each item
   * is the count to trust).
   */
  requiredTerms?: string[];
  optionalTerms?: string[];
  /** Start of the searched window (your archive horizon, or `from_date` if later). */
  windowFrom?: Date | null;
  /** One sentence for an agent to act on — what selected the rows, and what they are not. */
  note?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const newsSearchQueryInfoSchema: Schema<NewsSearchQueryInfo> = s.object<NewsSearchQueryInfo>(
  {
    mode: modeSchema,
    sort: sortSchema,
    terms: s.array(s.string()),
    requiredTerms: s.optional(s.array(s.string())),
    optionalTerms: s.optional(s.array(s.string())),
    windowFrom: s.optionalNullable(s.dateTime()),
    note: s.optional(s.string()),
    _keysMap: {
      requiredTerms: "required_terms",
      optionalTerms: "optional_terms",
      windowFrom: "window_from",
    },
  },
  { additionalProperties: s.json() },
);
