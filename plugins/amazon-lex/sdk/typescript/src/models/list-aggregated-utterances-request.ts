import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  aggregatedUtterancesFilterSchema,
  type AggregatedUtterancesFilter,
} from "./aggregated-utterances-filter.js";
import {
  aggregatedUtterancesSortBySchema,
  type AggregatedUtterancesSortBy,
} from "./aggregated-utterances-sort-by.js";
import {
  utteranceAggregationDurationSchema,
  type UtteranceAggregationDuration,
} from "./utterance-aggregation-duration.js";

export type ListAggregatedUtterancesRequest = {
  /** The unique identifier of the bot associated with this request. */
  botId: string;
  /**
   * The identifier of the bot alias associated with this request. If you specify the bot alias, you
   * can't specify the bot version.
   */
  botAliasId?: string;
  /**
   * The identifier of the bot version associated with this request. If you specify the bot version,
   * you can't specify the bot alias.
   */
  botVersion?: string;
  /**
   * The identifier of the language and locale where the utterances were collected. For more
   * information, see Supported languages.
   */
  localeId: string;
  aggregationDuration: UtteranceAggregationDuration;
  sortBy?: AggregatedUtterancesSortBy;
  /**
   * Provides the specification of a filter used to limit the utterances in the response to only
   * those that match the filter specification. You can only specify one filter and one string to
   * filter on.
   */
  filters?: AggregatedUtterancesFilter[];
  /**
   * The maximum number of utterances to return in each page of results. If there are fewer results
   * than the maximum page size, only the actual number of results are returned. If you don't
   * specify the maxResults parameter, 1,000 results are returned.
   */
  maxResults?: number;
  /**
   * If the response from the ListAggregatedUtterances operation contains more results that
   * specified in the maxResults parameter, a token is returned in the response. Use that token in
   * the nextToken parameter to return the next page of results.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listAggregatedUtterancesRequestSchema: Schema<ListAggregatedUtterancesRequest> =
  s.object<ListAggregatedUtterancesRequest>(
    {
      botId: s.string(),
      botAliasId: s.optional(s.string()),
      botVersion: s.optional(s.string()),
      localeId: s.string(),
      aggregationDuration: utteranceAggregationDurationSchema,
      sortBy: s.optional(s.lazy(() => aggregatedUtterancesSortBySchema)),
      filters: s.optional(s.array(s.lazy(() => aggregatedUtterancesFilterSchema))),
      maxResults: s.optional(s.int()),
      nextToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
