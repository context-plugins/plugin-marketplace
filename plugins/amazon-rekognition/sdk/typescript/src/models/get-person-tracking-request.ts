import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  sortByAmazonRekognitionOperationsApiSchema,
  type SortByAmazonRekognitionOperationsApi,
} from "./sort-by-amazon-rekognition-operations-api.js";

export type GetPersonTrackingRequest = {
  /**
   * The identifier for a job that tracks persons in a video. You get the JobId from a call to
   * StartPersonTracking.
   */
  jobId: string;
  /**
   * Maximum number of results to return per paginated call. The largest value you can specify is
   * 1000. If you specify a value greater than 1000, a maximum of 1000 results is returned. The
   * default value is 1000.
   */
  maxResults?: number;
  /**
   * If the previous response was incomplete (because there are more persons to retrieve), Amazon
   * Rekognition Video returns a pagination token in the response. You can use this pagination token
   * to retrieve the next set of persons.
   */
  nextToken?: string;
  /**
   * Sort to use for elements in the Persons array. Use TIMESTAMP to sort array elements by the time
   * persons are detected. Use INDEX to sort by the tracked persons. If you sort by INDEX, the array
   * elements for each person are sorted by detection confidence. The default sort is by TIMESTAMP.
   */
  sortBy?: SortByAmazonRekognitionOperationsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getPersonTrackingRequestSchema: Schema<GetPersonTrackingRequest> =
  s.object<GetPersonTrackingRequest>(
    {
      jobId: s.string(),
      maxResults: s.optional(s.int()),
      nextToken: s.optional(s.string()),
      sortBy: s.optional(s.lazy(() => sortByAmazonRekognitionOperationsApiSchema)),
      _keysMap: {
        jobId: "JobId",
        maxResults: "MaxResults",
        nextToken: "NextToken",
        sortBy: "SortBy",
      },
    },
    { additionalProperties: s.json() },
  );
