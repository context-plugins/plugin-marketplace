import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  contentModerationDetectionSchema,
  type ContentModerationDetection,
} from "./content-moderation-detection.js";
import {
  getContentModerationRequestMetadataSchema,
  type GetContentModerationRequestMetadata,
} from "./get-content-moderation-request-metadata.js";
import {
  jobStatusAmazonRekognitionContentModerationApiSchema,
  type JobStatusAmazonRekognitionContentModerationApi,
} from "./job-status-amazon-rekognition-content-moderation-api.js";
import { videoMetadataSchema, type VideoMetadata } from "./video-metadata.js";
import { videoSchema, type Video } from "./video.js";

export type GetContentModerationResponse = {
  /** The current status of the content moderation analysis job. */
  jobStatus?: JobStatusAmazonRekognitionContentModerationApi;
  /** If the job fails, StatusMessage provides a descriptive error message. */
  statusMessage?: string;
  videoMetadata?: VideoMetadata;
  /**
   * The detected inappropriate, unwanted, or offensive content moderation labels and the time(s)
   * they were detected.
   */
  moderationLabels?: ContentModerationDetection[];
  /**
   * If the response is truncated, Amazon Rekognition Video returns this token that you can use in
   * the subsequent request to retrieve the next set of content moderation labels.
   */
  nextToken?: string;
  /**
   * Version number of the moderation detection model that was used to detect inappropriate,
   * unwanted, or offensive content.
   */
  moderationModelVersion?: string;
  /**
   * Job identifier for the content moderation operation for which you want to obtain results. The
   * job identifer is returned by an initial call to StartContentModeration.
   */
  jobId?: string;
  video?: Video;
  /**
   * A job identifier specified in the call to StartContentModeration and returned in the job
   * completion notification sent to your Amazon Simple Notification Service topic.
   */
  jobTag?: string;
  getRequestMetadata?: GetContentModerationRequestMetadata;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getContentModerationResponseSchema: Schema<GetContentModerationResponse> =
  s.object<GetContentModerationResponse>(
    {
      jobStatus: s.optional(s.lazy(() => jobStatusAmazonRekognitionContentModerationApiSchema)),
      statusMessage: s.optional(s.string()),
      videoMetadata: s.optional(s.lazy(() => videoMetadataSchema)),
      moderationLabels: s.optional(s.array(s.lazy(() => contentModerationDetectionSchema))),
      nextToken: s.optional(s.string()),
      moderationModelVersion: s.optional(s.string()),
      jobId: s.optional(s.string()),
      video: s.optional(s.lazy(() => videoSchema)),
      jobTag: s.optional(s.string()),
      getRequestMetadata: s.optional(s.lazy(() => getContentModerationRequestMetadataSchema)),
      _keysMap: {
        jobStatus: "JobStatus",
        statusMessage: "StatusMessage",
        videoMetadata: "VideoMetadata",
        moderationLabels: "ModerationLabels",
        nextToken: "NextToken",
        moderationModelVersion: "ModerationModelVersion",
        jobId: "JobId",
        video: "Video",
        jobTag: "JobTag",
        getRequestMetadata: "GetRequestMetadata",
      },
    },
    { additionalProperties: s.json() },
  );
