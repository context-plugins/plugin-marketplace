import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { wikipediaSearchFilterSchema, type WikipediaSearchFilter } from "./wikipedia-search-filter.js";

export type WikipediaSearchParams = {
  /** Natural language query to search the Wikipedia pages database */
  prompt: string;
  filter?: WikipediaSearchFilter;
  /**
   * 'wikiRevisionFrom' filter, will search pages modified after the specified date, the date could
   * be passed as ISO or 'yyyy-mm-dd'. Date time in ISO format, ie. 2024-01-01T00:00:00.
   */
  wikiRevisionFrom?: Date | null;
  /**
   * 'wikiRevisionFrom' filter, will search pages modified before the specified date, the date could
   * be passed as ISO or 'yyyy-mm-dd'. Date time in ISO format, ie. 2024-01-01T00:00:00.
   */
  wikiRevisionTo?: Date | null;
  /**
   * 'pageviewsFrom' filter, will search pages with at least the provided number of views per day.
   */
  pageviewsFrom?: number | null;
  /**
   * 'pageviewsFrom' filter, will search pages with at most the provided number of views per day.
   */
  pageviewsTo?: number | null;
  /** The number of items per page. @default 10 */
  size?: number | null;
  /** The page number to retrieve. @default 0 */
  page?: number | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const wikipediaSearchParamsProperties: s.Shape<WikipediaSearchParams> = {
  prompt: s.string(),
  filter: s.optional(s.lazy(() => wikipediaSearchFilterSchema)),
  wikiRevisionFrom: s.optionalNullable(s.dateTime()),
  wikiRevisionTo: s.optionalNullable(s.dateTime()),
  pageviewsFrom: s.optionalNullable(s.int()),
  pageviewsTo: s.optionalNullable(s.int()),
  size: s.defaulted(s.nullable(s.int()), 10),
  page: s.defaulted(s.nullable(s.int()), 0),
};

export const wikipediaSearchParamsInternalSchema: Schema<WikipediaSearchParams> =
  s.object<WikipediaSearchParams>(wikipediaSearchParamsProperties, { additionalProperties: s.json() });

export const wikipediaSearchParamsSchema: Schema<WikipediaSearchParams> = s.lazySchema(() =>
  s.object<WikipediaSearchParams>(
    {
      ...wikipediaSearchParamsProperties,
      prompt: s.string().check(s.minLength(0), s.maxLength(1024)),
      size: s.defaulted(s.nullable(s.int().check(s.gte(1), s.lte(100))), 10),
      page: s.defaulted(s.nullable(s.int().check(s.gte(0), s.lte(10000))), 0),
    },
    { additionalProperties: s.json() },
  ),
);
