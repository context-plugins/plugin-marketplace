import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  jobStatusAmazonRekognitionTextDetectionApiSchema,
  type JobStatusAmazonRekognitionTextDetectionApi,
} from "./job-status-amazon-rekognition-text-detection-api.js";
import { textDetectionResultSchema, type TextDetectionResult } from "./text-detection-result.js";
import { videoMetadataSchema, type VideoMetadata } from "./video-metadata.js";
import { videoSchema, type Video } from "./video.js";

export type GetTextDetectionResponse = {
  /** Current status of the text detection job. */
  jobStatus?: JobStatusAmazonRekognitionTextDetectionApi;
  /** If the job fails, StatusMessage provides a descriptive error message. */
  statusMessage?: string;
  videoMetadata?: VideoMetadata;
  /**
   * An array of text detected in the video. Each element contains the detected text, the time in
   * milliseconds from the start of the video that the text was detected, and where it was detected
   * on the screen.
   */
  textDetections?: TextDetectionResult[];
  /**
   * If the response is truncated, Amazon Rekognition Video returns this token that you can use in
   * the subsequent request to retrieve the next set of text.
   */
  nextToken?: string;
  /** Version number of the text detection model that was used to detect text. */
  textModelVersion?: string;
  /**
   * Job identifier for the text detection operation for which you want to obtain results. The job
   * identifer is returned by an initial call to StartTextDetection.
   */
  jobId?: string;
  video?: Video;
  /**
   * A job identifier specified in the call to StartTextDetection and returned in the job completion
   * notification sent to your Amazon Simple Notification Service topic.
   */
  jobTag?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getTextDetectionResponseSchema: Schema<GetTextDetectionResponse> =
  s.object<GetTextDetectionResponse>(
    {
      jobStatus: s.optional(s.lazy(() => jobStatusAmazonRekognitionTextDetectionApiSchema)),
      statusMessage: s.optional(s.string()),
      videoMetadata: s.optional(s.lazy(() => videoMetadataSchema)),
      textDetections: s.optional(s.array(s.lazy(() => textDetectionResultSchema))),
      nextToken: s.optional(s.string()),
      textModelVersion: s.optional(s.string()),
      jobId: s.optional(s.string()),
      video: s.optional(s.lazy(() => videoSchema)),
      jobTag: s.optional(s.string()),
      _keysMap: {
        jobStatus: "JobStatus",
        statusMessage: "StatusMessage",
        videoMetadata: "VideoMetadata",
        textDetections: "TextDetections",
        nextToken: "NextToken",
        textModelVersion: "TextModelVersion",
        jobId: "JobId",
        video: "Video",
        jobTag: "JobTag",
      },
    },
    { additionalProperties: s.json() },
  );
