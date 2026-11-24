import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type GetFaceDetectionRequest = {
  /**
   * Unique identifier for the face detection job. The JobId is returned from StartFaceDetection.
   */
  jobId: string;
  /**
   * Maximum number of results to return per paginated call. The largest value you can specify is
   * 1000. If you specify a value greater than 1000, a maximum of 1000 results is returned. The
   * default value is 1000.
   */
  maxResults?: number;
  /**
   * If the previous response was incomplete (because there are more faces to retrieve), Amazon
   * Rekognition Video returns a pagination token in the response. You can use this pagination token
   * to retrieve the next set of faces.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getFaceDetectionRequestSchema: Schema<GetFaceDetectionRequest> =
  s.object<GetFaceDetectionRequest>(
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
