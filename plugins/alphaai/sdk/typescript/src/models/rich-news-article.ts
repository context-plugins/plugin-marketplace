import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { earningsReportSchema, type EarningsReport } from "./earnings-report.js";
import { eightKFilingInternalSchema, eightKFilingSchema, type EightKFiling } from "./eight-kfiling.js";
import {
  enrichedArticleInternalSchema,
  enrichedArticleSchema,
  type EnrichedArticle,
} from "./enriched-article.js";
import { insiderEventSchema, type InsiderEvent } from "./insider-event.js";
import {
  originalArticleInternalSchema,
  originalArticleSchema,
  type OriginalArticle,
} from "./original-article.js";
import { searchMatchSchema, type SearchMatch } from "./search-match.js";

export type RichNewsArticle = {
  /** The article as fetched from the source. `raw_text` is intentionally NOT exposed here. */
  original: OriginalArticle;
  enrichment: EnrichedArticle;
  /**
   * Present only on `/api/news/search/` rows — how this article matched the query. `null` on every
   * other endpoint.
   */
  searchMatch?: SearchMatch | null;
  /**
   * AlphAI's structured read of the company's SEC earnings filing (8-K item 2.02, or a foreign
   * private issuer's 6-K earnings release). Present only on a major ticker's earnings article whose
   * figures cleared a cross-check against the filing text; null on every other article.
   */
  earnings?: EarningsReport | null;
  /**
   * The story this article belongs to: a permanent key, the same value for a given story on every
   * surface (`/api/news/`, search, trending, the MCP tools and `/api/stories/`) and across calls.
   * Filled on every row of `/api/news/` and `/api/news/search/` since 1.49.0, and always on
   * `/api/news/trending/`; a lone article is a story of one and names itself. The value is the
   * `uid` of the story's first root article and does not change when a stronger copy later takes
   * the root over or two stories merge (before 1.49.0 it followed the live root and could move
   * once). Resolve it with `/api/stories/{story_id}/`: `found` is a story summarised from two or
   * more publishers, `not_a_story` means one publisher carried the event (`/api/news/{uid}/` has
   * the article), `merged` names the surviving story. `/api/news/{uid}/` carries it too; null only
   * on `/api/news/{uid}/related/`. The `sources_count` / `sources` pair stays collapse-only.
   */
  storyId?: string | null;
  /**
   * Story-collapsed responses only. Number of distinct outlets (source domains) covering this
   * story; the same outlet running it more than once counts once. Most stories are carried by a
   * single outlet, so this is usually 1. Treat a value above 1 as the signal, not the number
   * itself. May exceed the length of `sources`, which is capped at 10. `null` in the default feed.
   */
  sourcesCount?: number | null;
  /**
   * Story-collapsed responses only. Distinct source domains covering this story, in
   * first-appearance order, capped at 10. `null` in the default feed.
   */
  sources?: string[] | null;
  /**
   * `/api/news/insider/` and `/api/news/{uid}/` — the structured SEC Form 4 event block, on every
   * row whose source is a Form 4. `null` on every other row, on the other endpoints, and on rows
   * without paired transaction data.
   */
  insider?: InsiderEvent | null;
  /**
   * `/api/news/` and `/api/news/{uid}/` — the structured SEC 8-K filing block, present on every row
   * whose source is an 8-K (`original.source` is `SEC EDGAR 8-K`; filter them with
   * `source_type=sec_form8k` or `item=`). `null` on press, Form 4 and 6-K rows, on the other
   * endpoints, and on the rare 8-K row without structured data.
   */
  filing?: EightKFiling | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const richNewsArticleProperties: s.Shape<RichNewsArticle> = {
  original: originalArticleInternalSchema,
  enrichment: enrichedArticleInternalSchema,
  searchMatch: s.optionalNullable(s.lazy(() => searchMatchSchema)),
  earnings: s.optionalNullable(s.lazy(() => earningsReportSchema)),
  storyId: s.optionalNullable(s.string()),
  sourcesCount: s.optionalNullable(s.int()),
  sources: s.optionalNullable(s.array(s.string())),
  insider: s.optionalNullable(s.lazy(() => insiderEventSchema)),
  filing: s.optionalNullable(s.lazy(() => eightKFilingInternalSchema)),
  _keysMap: {
    searchMatch: "search_match",
    storyId: "story_id",
    sourcesCount: "sources_count",
  },
};

export const richNewsArticleInternalSchema: Schema<RichNewsArticle> = s.object<RichNewsArticle>(
  richNewsArticleProperties,
  { additionalProperties: s.json() },
);

export const richNewsArticleSchema: Schema<RichNewsArticle> = s.lazySchema(() =>
  s.object<RichNewsArticle>(
    {
      ...richNewsArticleProperties,
      original: originalArticleSchema,
      enrichment: enrichedArticleSchema,
      filing: s.optionalNullable(s.lazy(() => eightKFilingSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
