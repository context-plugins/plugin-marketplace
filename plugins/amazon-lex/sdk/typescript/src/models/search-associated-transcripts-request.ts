import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  associatedTranscriptFilterSchema,
  type AssociatedTranscriptFilter,
} from "./associated-transcript-filter.js";
import { searchOrderSchema, type SearchOrder } from "./search-order.js";

export type SearchAssociatedTranscriptsRequest = {
  /** The unique identifier of the bot associated with the transcripts that you are searching. */
  botId: string;
  /** The version of the bot containing the transcripts that you are searching. */
  botVersion: string;
  /**
   * The identifier of the language and locale of the transcripts to search. The string must match
   * one of the supported locales. For more information, see Supported languages
   */
  localeId: string;
  /** The unique identifier of the bot recommendation associated with the transcripts to search. */
  botRecommendationId: string;
  /**
   * How SearchResults are ordered. Valid values are Ascending or Descending. The default is
   * Descending.
   */
  searchOrder?: SearchOrder;
  /** A list of filter objects. */
  filters: AssociatedTranscriptFilter[];
  /**
   * The maximum number of bot recommendations to return in each page of results. If there are fewer
   * results than the max page size, only the actual number of results are returned.
   */
  maxResults?: number;
  /**
   * If the response from the SearchAssociatedTranscriptsRequest operation contains more results
   * than specified in the maxResults parameter, an index is returned in the response. Use that
   * index in the nextIndex parameter to return the next page of results.
   */
  nextIndex?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const searchAssociatedTranscriptsRequestSchema: Schema<SearchAssociatedTranscriptsRequest> =
  s.object<SearchAssociatedTranscriptsRequest>(
    {
      botId: s.string(),
      botVersion: s.string(),
      localeId: s.string(),
      botRecommendationId: s.string(),
      searchOrder: s.optional(s.lazy(() => searchOrderSchema)),
      filters: s.array(s.lazy(() => associatedTranscriptFilterSchema)),
      maxResults: s.optional(s.int()),
      nextIndex: s.optional(s.int()),
    },
    { additionalProperties: s.json() },
  );
