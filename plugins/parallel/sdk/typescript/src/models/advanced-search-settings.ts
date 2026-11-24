import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { excerptSettingsSchema, type ExcerptSettings } from "./unions/excerpt-settings.js";
import { fetchPolicy1Schema, type FetchPolicy1 } from "./unions/fetch-policy1.js";
import {
  locationParallelAiSearchApiSchema,
  type LocationParallelAiSearchApi,
} from "./unions/location-parallel-ai-search-api.js";
import { maxResultsSchema, type MaxResults } from "./unions/max-results.js";
import { sourcePolicy1Schema, type SourcePolicy1 } from "./unions/source-policy1.js";

/**
 * Advanced search configuration.
 *
 * These settings may impact result quality and latency unless used carefully. See
 * https://docs.parallel.ai/search/advanced-search-settings for more info.
 */
export type AdvancedSearchSettings = {
  /** Domain and date filtering preferences for search results. */
  sourcePolicy?: SourcePolicy1;
  /**
   * Fetch policy: determines when to return cached content from the index (faster) vs fetching live
   * content (fresher). Default is to disable live fetch and return cached content from the index.
   * Note: enabling live fetch significantly increases search latency because it requires fetching
   * content from source websites.
   */
  fetchPolicy?: FetchPolicy1;
  /**
   * Controls excerpt sizes. Provide excerpt settings for fine-grained control, or omit to use
   * defaults.
   */
  excerptSettings?: ExcerptSettings;
  /** ISO 3166-1 alpha-2 country code for geo-targeted search results. */
  location?: LocationParallelAiSearchApi;
  /** Upper bound on the number of results to return. Defaults to 10 if not provided. */
  maxResults?: MaxResults;
};

export const advancedSearchSettingsSchema: Schema<AdvancedSearchSettings> = s.object<AdvancedSearchSettings>({
  sourcePolicy: s.optional(s.lazy(() => sourcePolicy1Schema)),
  fetchPolicy: s.optional(s.lazy(() => fetchPolicy1Schema)),
  excerptSettings: s.optional(s.lazy(() => excerptSettingsSchema)),
  location: s.optional(s.lazy(() => locationParallelAiSearchApiSchema)),
  maxResults: s.optional(s.lazy(() => maxResultsSchema)),
  _keysMap: {
    sourcePolicy: "source_policy",
    fetchPolicy: "fetch_policy",
    excerptSettings: "excerpt_settings",
    maxResults: "max_results",
  },
});
