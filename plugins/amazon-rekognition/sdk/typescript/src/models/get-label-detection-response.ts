import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  getLabelDetectionRequestMetadataSchema,
  type GetLabelDetectionRequestMetadata,
} from "./get-label-detection-request-metadata.js";
import {
  jobStatusAmazonRekognitionStoredVideoAnalysisApiSchema,
  type JobStatusAmazonRekognitionStoredVideoAnalysisApi,
} from "./job-status-amazon-rekognition-stored-video-analysis-api.js";
import { labelDetectionSchema, type LabelDetection } from "./label-detection.js";
import { videoMetadataSchema, type VideoMetadata } from "./video-metadata.js";
import { videoSchema, type Video } from "./video.js";

export type GetLabelDetectionResponse = {
  /** The current status of the label detection job. */
  jobStatus?: JobStatusAmazonRekognitionStoredVideoAnalysisApi;
  /** If the job fails, StatusMessage provides a descriptive error message. */
  statusMessage?: string;
  videoMetadata?: VideoMetadata;
  /**
   * If the response is truncated, Amazon Rekognition Video returns this token that you can use in
   * the subsequent request to retrieve the next set of labels.
   */
  nextToken?: string;
  /**
   * An array of labels detected in the video. Each element contains the detected label and the
   * time, in milliseconds from the start of the video, that the label was detected.
   */
  labels?: LabelDetection[];
  /** Version number of the label detection model that was used to detect labels. */
  labelModelVersion?: string;
  /**
   * Job identifier for the label detection operation for which you want to obtain results. The job
   * identifer is returned by an initial call to StartLabelDetection.
   */
  jobId?: string;
  video?: Video;
  /**
   * A job identifier specified in the call to StartLabelDetection and returned in the job
   * completion notification sent to your Amazon Simple Notification Service topic.
   */
  jobTag?: string;
  getRequestMetadata?: GetLabelDetectionRequestMetadata;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getLabelDetectionResponseSchema: Schema<GetLabelDetectionResponse> =
  s.object<GetLabelDetectionResponse>(
    {
      jobStatus: s.optional(s.lazy(() => jobStatusAmazonRekognitionStoredVideoAnalysisApiSchema)),
      statusMessage: s.optional(s.string()),
      videoMetadata: s.optional(s.lazy(() => videoMetadataSchema)),
      nextToken: s.optional(s.string()),
      labels: s.optional(s.array(s.lazy(() => labelDetectionSchema))),
      labelModelVersion: s.optional(s.string()),
      jobId: s.optional(s.string()),
      video: s.optional(s.lazy(() => videoSchema)),
      jobTag: s.optional(s.string()),
      getRequestMetadata: s.optional(s.lazy(() => getLabelDetectionRequestMetadataSchema)),
      _keysMap: {
        jobStatus: "JobStatus",
        statusMessage: "StatusMessage",
        videoMetadata: "VideoMetadata",
        nextToken: "NextToken",
        labels: "Labels",
        labelModelVersion: "LabelModelVersion",
        jobId: "JobId",
        video: "Video",
        jobTag: "JobTag",
        getRequestMetadata: "GetRequestMetadata",
      },
    },
    { additionalProperties: s.json() },
  );
