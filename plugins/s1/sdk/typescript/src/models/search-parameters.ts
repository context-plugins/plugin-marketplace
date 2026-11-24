import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { searchServiceSchema, type SearchService } from "./search-service.js";
import { timeRangeSchema, type TimeRange } from "./time-range.js";

export type SearchParameters = {
  query: string;
  searchService?: SearchService;
  /** @default 5 */
  maxResults?: number;
  /** @default 1 */
  page?: number;
  /** @default 0 */
  crawlResults?: number;
  /** @default false */
  image?: boolean;
  includeSites?: string[];
  excludeSites?: string[];
  language?: string;
  timeRange?: TimeRange;
};

const searchParametersProperties: s.Shape<SearchParameters> = {
  query: s.string(),
  searchService: s.optional(s.lazy(() => searchServiceSchema)),
  maxResults: s.defaulted(s.int(), 5),
  page: s.defaulted(s.int(), 1),
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

export const searchParametersInternalSchema: Schema<SearchParameters> =
  s.object<SearchParameters>(searchParametersProperties);

export const searchParametersSchema: Schema<SearchParameters> = s.lazySchema(() =>
  s.object<SearchParameters>({
    ...searchParametersProperties,
    query: s.string().check(s.minLength(1)),
    maxResults: s.defaulted(s.int().check(s.gte(1), s.lte(50)), 5),
    page: s.defaulted(s.int().check(s.gte(1), s.lte(100)), 1),
    crawlResults: s.defaulted(s.int().check(s.gte(0), s.lte(50)), 0),
  }),
);
