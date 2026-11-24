import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  sortByAmazonRekognitionFaceSearchApiSchema,
  type SortByAmazonRekognitionFaceSearchApi,
} from "./sort-by-amazon-rekognition-face-search-api.js";

export type GetFaceSearchRequest = {
  /**
   * The job identifer for the search request. You get the job identifier from an initial call to
   * StartFaceSearch.
   */
  jobId: string;
  /**
   * Maximum number of results to return per paginated call. The largest value you can specify is
   * 1000. If you specify a value greater than 1000, a maximum of 1000 results is returned. The
   * default value is 1000.
   */
  maxResults?: number;
  /**
   * If the previous response was incomplete (because there is more search results to retrieve),
   * Amazon Rekognition Video returns a pagination token in the response. You can use this
   * pagination token to retrieve the next set of search results.
   */
  nextToken?: string;
  /**
   * Sort to use for grouping faces in the response. Use TIMESTAMP to group faces by the time that
   * they are recognized. Use INDEX to sort by recognized faces.
   */
  sortBy?: SortByAmazonRekognitionFaceSearchApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getFaceSearchRequestSchema: Schema<GetFaceSearchRequest> = s.object<GetFaceSearchRequest>(
  {
    jobId: s.string(),
    maxResults: s.optional(s.int()),
    nextToken: s.optional(s.string()),
    sortBy: s.optional(s.lazy(() => sortByAmazonRekognitionFaceSearchApiSchema)),
    _keysMap: {
      jobId: "JobId",
      maxResults: "MaxResults",
      nextToken: "NextToken",
      sortBy: "SortBy",
    },
  },
  { additionalProperties: s.json() },
);
