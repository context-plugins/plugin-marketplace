import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type GetSegmentDetectionRequest = {
  /**
   * Job identifier for the text detection operation for which you want results returned. You get
   * the job identifer from an initial call to StartSegmentDetection.
   */
  jobId: string;
  /**
   * Maximum number of results to return per paginated call. The largest value you can specify is
   * 1000.
   */
  maxResults?: number;
  /**
   * If the response is truncated, Amazon Rekognition Video returns this token that you can use in
   * the subsequent request to retrieve the next set of text.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getSegmentDetectionRequestSchema: Schema<GetSegmentDetectionRequest> =
  s.object<GetSegmentDetectionRequest>(
    {
      jobId: s.string(),
      maxResults: s.optional(s.int()),
      nextToken: s.optional(s.string()),
      _keysMap: {
        jobId: "JobId",
        maxResults: "MaxResults",
        nextToken: "NextToken",
      },
    },
    { additionalProperties: s.json() },
  );
