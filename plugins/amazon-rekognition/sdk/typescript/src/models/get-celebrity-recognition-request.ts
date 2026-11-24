import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sortBySchema, type SortBy } from "./sort-by.js";

export type GetCelebrityRecognitionRequest = {
  /**
   * Job identifier for the required celebrity recognition analysis. You can get the job identifer
   * from a call to StartCelebrityRecognition.
   */
  jobId: string;
  /**
   * Maximum number of results to return per paginated call. The largest value you can specify is
   * 1000. If you specify a value greater than 1000, a maximum of 1000 results is returned. The
   * default value is 1000.
   */
  maxResults?: number;
  /**
   * If the previous response was incomplete (because there is more recognized celebrities to
   * retrieve), Amazon Rekognition Video returns a pagination token in the response. You can use
   * this pagination token to retrieve the next set of celebrities.
   */
  nextToken?: string;
  /**
   * Sort to use for celebrities returned in Celebrities field. Specify ID to sort by the celebrity
   * identifier, specify TIMESTAMP to sort by the time the celebrity was recognized.
   */
  sortBy?: SortBy;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getCelebrityRecognitionRequestSchema: Schema<GetCelebrityRecognitionRequest> =
  s.object<GetCelebrityRecognitionRequest>(
    {
      jobId: s.string(),
      maxResults: s.optional(s.int()),
      nextToken: s.optional(s.string()),
      sortBy: s.optional(s.lazy(() => sortBySchema)),
      _keysMap: {
        jobId: "JobId",
        maxResults: "MaxResults",
        nextToken: "NextToken",
        sortBy: "SortBy",
      },
    },
    { additionalProperties: s.json() },
  );
