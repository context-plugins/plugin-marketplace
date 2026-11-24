import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  aggregateByAmazonRekognitionStoredVideoAnalysisApiSchema,
  type AggregateByAmazonRekognitionStoredVideoAnalysisApi,
} from "./aggregate-by-amazon-rekognition-stored-video-analysis-api.js";
import {
  sortByAmazonRekognitionStoredVideoAnalysisApiSchema,
  type SortByAmazonRekognitionStoredVideoAnalysisApi,
} from "./sort-by-amazon-rekognition-stored-video-analysis-api.js";

export type GetLabelDetectionRequest = {
  /**
   * Job identifier for the label detection operation for which you want results returned. You get
   * the job identifer from an initial call to StartlabelDetection.
   */
  jobId: string;
  /**
   * Maximum number of results to return per paginated call. The largest value you can specify is
   * 1000. If you specify a value greater than 1000, a maximum of 1000 results is returned. The
   * default value is 1000.
   */
  maxResults?: number;
  /**
   * If the previous response was incomplete (because there are more labels to retrieve), Amazon
   * Rekognition Video returns a pagination token in the response. You can use this pagination token
   * to retrieve the next set of labels.
   */
  nextToken?: string;
  /**
   * Sort to use for elements in the Labels array. Use TIMESTAMP to sort array elements by the time
   * labels are detected. Use NAME to alphabetically group elements for a label together. Within
   * each label group, the array element are sorted by detection confidence. The default sort is by
   * TIMESTAMP.
   */
  sortBy?: SortByAmazonRekognitionStoredVideoAnalysisApi;
  /**
   * Defines how to aggregate the returned results. Results can be aggregated by timestamps or
   * segments.
   */
  aggregateBy?: AggregateByAmazonRekognitionStoredVideoAnalysisApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getLabelDetectionRequestSchema: Schema<GetLabelDetectionRequest> =
  s.object<GetLabelDetectionRequest>(
    {
      jobId: s.string(),
      maxResults: s.optional(s.int()),
      nextToken: s.optional(s.string()),
      sortBy: s.optional(s.lazy(() => sortByAmazonRekognitionStoredVideoAnalysisApiSchema)),
      aggregateBy: s.optional(s.lazy(() => aggregateByAmazonRekognitionStoredVideoAnalysisApiSchema)),
      _keysMap: {
        jobId: "JobId",
        maxResults: "MaxResults",
        nextToken: "NextToken",
        sortBy: "SortBy",
        aggregateBy: "AggregateBy",
      },
    },
    { additionalProperties: s.json() },
  );
