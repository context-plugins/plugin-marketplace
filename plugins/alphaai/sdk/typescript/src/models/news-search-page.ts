import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { newsSearchQueryInfoSchema, type NewsSearchQueryInfo } from "./news-search-query-info.js";
import {
  richNewsArticleInternalSchema,
  richNewsArticleSchema,
  type RichNewsArticle,
} from "./rich-news-article.js";

export type NewsSearchPage = {
  /** Feed items in rank order, each with `search_match`. */
  results: RichNewsArticle[];
  /** Pass back as `cursor` for the next page; `null` past the 200-match bound. */
  nextCursor?: string | null;
  /** Items on this page. */
  count: number;
  /** Visible matches in the bounded candidate set (at most 200); never a global total. */
  matched: number;
  /** How `/api/news/search/` read the query. */
  query: NewsSearchQueryInfo;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const newsSearchPageProperties: s.Shape<NewsSearchPage> = {
  results: s.array(s.lazy(() => richNewsArticleInternalSchema)),
  nextCursor: s.optionalNullable(s.string()),
  count: s.int(),
  matched: s.int(),
  query: newsSearchQueryInfoSchema,
  _keysMap: {
    nextCursor: "next_cursor",
  },
};

export const newsSearchPageInternalSchema: Schema<NewsSearchPage> = s.object<NewsSearchPage>(
  newsSearchPageProperties,
  { additionalProperties: s.json() },
);

export const newsSearchPageSchema: Schema<NewsSearchPage> = s.lazySchema(() =>
  s.object<NewsSearchPage>(
    {
      ...newsSearchPageProperties,
      results: s.array(s.lazy(() => richNewsArticleSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
