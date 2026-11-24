import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { histogramQueryResultSchema, type HistogramQueryResult } from "./histogram-query-result.js";
import { locationSchema, type Location } from "./location.js";
import { matchingJobSchema, type MatchingJob } from "./matching-job.js";
import { responseMetadata1Schema, type ResponseMetadata1 } from "./response-metadata1.js";
import { spellingCorrection2Schema, type SpellingCorrection2 } from "./spelling-correction2.js";

/** Response for SearchJob method. */
export type SearchJobsResponse = {
  /**
   * Number of jobs that match the specified query. Note: This size is precise only if the total is
   * less than 100,000.
   */
  totalSize?: number;
  /** The Job entities that match the specified SearchJobsRequest. */
  matchingJobs?: MatchingJob[];
  /** Additional information for the API invocation, such as the request tracking id. */
  metadata?: ResponseMetadata1;
  /** The histogram results that match with specified SearchJobsRequest.histogram_queries. */
  histogramQueryResults?: HistogramQueryResult[];
  /**
   * If query broadening is enabled, we may append additional results from the broadened query. This
   * number indicates how many of the jobs returned in the jobs field are from the broadened query.
   * These results are always at the end of the jobs list. In particular, a value of 0, or if the
   * field isn't set, all the jobs in the jobs list are from the original (without broadening)
   * query. If this field is non-zero, subsequent requests with offset after this result set should
   * contain all broadened results.
   */
  broadenedQueryJobsCount?: number;
  /**
   * The token that specifies the starting position of the next page of results. This field is empty
   * if there are no more results.
   */
  nextPageToken?: string;
  /**
   * The location filters that the service applied to the specified query. If any filters are
   * lat-lng based, the Location.location_type is Location.LocationType.LOCATION_TYPE_UNSPECIFIED.
   */
  locationFilters?: Location[];
  /** The spell checking result, and correction. */
  spellCorrection?: SpellingCorrection2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const searchJobsResponseSchema: Schema<SearchJobsResponse> = s.object<SearchJobsResponse>(
  {
    totalSize: s.optional(s.int()),
    matchingJobs: s.optional(s.array(s.lazy(() => matchingJobSchema))),
    metadata: s.optional(s.lazy(() => responseMetadata1Schema)),
    histogramQueryResults: s.optional(s.array(s.lazy(() => histogramQueryResultSchema))),
    broadenedQueryJobsCount: s.optional(s.int()),
    nextPageToken: s.optional(s.string()),
    locationFilters: s.optional(s.array(s.lazy(() => locationSchema))),
    spellCorrection: s.optional(s.lazy(() => spellingCorrection2Schema)),
  },
  { additionalProperties: s.json() },
);
