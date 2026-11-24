import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { aggregateBySchema, type AggregateBy } from "./aggregate-by.js";
import {
  sortByAmazonRekognitionContentModerationApiSchema,
  type SortByAmazonRekognitionContentModerationApi,
} from "./sort-by-amazon-rekognition-content-moderation-api.js";

export type GetContentModerationRequest = {
  /**
   * The identifier for the inappropriate, unwanted, or offensive content moderation job. Use JobId
   * to identify the job in a subsequent call to GetContentModeration.
   */
  jobId: string;
  /**
   * Maximum number of results to return per paginated call. The largest value you can specify is
   * 1000. If you specify a value greater than 1000, a maximum of 1000 results is returned. The
   * default value is 1000.
   */
  maxResults?: number;
  /**
   * If the previous response was incomplete (because there is more data to retrieve), Amazon
   * Rekognition returns a pagination token in the response. You can use this pagination token to
   * retrieve the next set of content moderation labels.
   */
  nextToken?: string;
  /**
   * Sort to use for elements in the ModerationLabelDetections array. Use TIMESTAMP to sort array
   * elements by the time labels are detected. Use NAME to alphabetically group elements for a label
   * together. Within each label group, the array element are sorted by detection confidence. The
   * default sort is by TIMESTAMP.
   */
  sortBy?: SortByAmazonRekognitionContentModerationApi;
  /**
   * Defines how to aggregate results of the StartContentModeration request. Default aggregation
   * option is TIMESTAMPS. SEGMENTS mode aggregates moderation labels over time.
   */
  aggregateBy?: AggregateBy;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getContentModerationRequestSchema: Schema<GetContentModerationRequest> =
  s.object<GetContentModerationRequest>(
    {
      jobId: s.string(),
      maxResults: s.optional(s.int()),
      nextToken: s.optional(s.string()),
      sortBy: s.optional(s.lazy(() => sortByAmazonRekognitionContentModerationApiSchema)),
      aggregateBy: s.optional(s.lazy(() => aggregateBySchema)),
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
