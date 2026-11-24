import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** How an article matched a `/api/news/search/` query. */
export type SearchMatch = {
  /**
   * The engine's ranking score for this row. Comparable within one response only, never across
   * queries or engine versions.
   */
  score?: number;
  /**
   * In `broadened` mode, how many of the query's words this row carries (at least two); `null` in
   * `strict` mode, where every word matched.
   */
  termsMatched?: number | null;
  /**
   * A fragment of the summary around the matched words, each wrapped in `**…**`; `null` when the
   * match lies in the title or the entity names only.
   */
  context?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const searchMatchSchema: Schema<SearchMatch> = s.object<SearchMatch>(
  {
    score: s.optional(s.float64()),
    termsMatched: s.optionalNullable(s.int()),
    context: s.optionalNullable(s.string()),
    _keysMap: {
      termsMatched: "terms_matched",
    },
  },
  { additionalProperties: s.json() },
);
