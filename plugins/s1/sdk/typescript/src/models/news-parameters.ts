import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { searchService1Schema, type SearchService1 } from "./search-service1.js";
import { timeRangeSchema, type TimeRange } from "./time-range.js";

export type NewsParameters = {
  query: string;
  searchService?: SearchService1;
  /** @default 5 */
  maxResults?: number;
  /** @default 0 */
  crawlResults?: number;
  /** @default false */
  image?: boolean;
  includeSites?: string[];
  excludeSites?: string[];
  language?: string;
  timeRange?: TimeRange;
};

const newsParametersProperties: s.Shape<NewsParameters> = {
  query: s.string(),
  searchService: s.optional(s.lazy(() => searchService1Schema)),
  maxResults: s.defaulted(s.int(), 5),
  crawlResults: s.defaulted(s.int(), 0),
  image: s.defaulted(s.boolean(), false),
  includeSites: s.optional(s.array(s.string())),
  excludeSites: s.optional(s.array(s.string())),
  language: s.optional(s.string()),
  timeRange: s.optional(s.lazy(() => timeRangeSchema)),
  _keysMap: {
    searchService: "search_service",
    maxResults: "max_results",
    crawlResults: "crawl_results",
    includeSites: "include_sites",
    excludeSites: "exclude_sites",
    timeRange: "time_range",
  },
};

export const newsParametersInternalSchema: Schema<NewsParameters> =
  s.object<NewsParameters>(newsParametersProperties);

export const newsParametersSchema: Schema<NewsParameters> = s.lazySchema(() =>
  s.object<NewsParameters>({
    ...newsParametersProperties,
    query: s.string().check(s.minLength(1)),
    maxResults: s.defaulted(s.int().check(s.gte(1), s.lte(50)), 5),
    crawlResults: s.defaulted(s.int().check(s.gte(0), s.lte(50)), 0),
  }),
);
