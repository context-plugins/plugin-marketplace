import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { articleSearchFilterSchema, type ArticleSearchFilter } from "./article-search-filter.js";

export type ArticleSearchParams = {
  /** Natural language query to search the news articles database */
  prompt: string;
  filter?: ArticleSearchFilter;
  /**
   * 'pubDateFrom' filter, will search articles published after the specified date, the date could
   * be passed as ISO or 'yyyy-mm-dd'. Date time in ISO format, ie. 2024-01-01T00:00:00 - Default:
   * Only articles with a pubDate within the last 30 days of the request
   */
  pubDateFrom?: Date | null;
  /**
   * 'pubDateTo' filter, will search articles published before the specified date, the date could be
   * passed as ISO or 'yyyy-mm-dd'. Date time in ISO format, ie. 2024-01-01T00:00:00
   */
  pubDateTo?: Date | null;
  /**
   * Whether to return reprints in the response or not. Reprints are usually wired articles from
   * sources like AP or Reuters that are reprinted in multiple sources at the same time. By default,
   * this parameter is 'true'.
   *
   * @default true
   */
  showReprints?: boolean | null;
  /** The number of items per page. @default 10 */
  size?: number | null;
  /** The page number to retrieve. @default 0 */
  page?: number | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const articleSearchParamsProperties: s.Shape<ArticleSearchParams> = {
  prompt: s.string(),
  filter: s.optional(s.lazy(() => articleSearchFilterSchema)),
  pubDateFrom: s.optionalNullable(s.dateTime()),
  pubDateTo: s.optionalNullable(s.dateTime()),
  showReprints: s.defaulted(s.nullable(s.boolean()), true),
  size: s.defaulted(s.nullable(s.int()), 10),
  page: s.defaulted(s.nullable(s.int()), 0),
};

export const articleSearchParamsInternalSchema: Schema<ArticleSearchParams> = s.object<ArticleSearchParams>(
  articleSearchParamsProperties,
  { additionalProperties: s.json() },
);

export const articleSearchParamsSchema: Schema<ArticleSearchParams> = s.lazySchema(() =>
  s.object<ArticleSearchParams>(
    {
      ...articleSearchParamsProperties,
      prompt: s.string().check(s.minLength(0), s.maxLength(1024)),
      size: s.defaulted(s.nullable(s.int().check(s.gte(1), s.lte(100))), 10),
      page: s.defaulted(s.nullable(s.int().check(s.gte(0), s.lte(10000))), 0),
    },
    { additionalProperties: s.json() },
  ),
);
