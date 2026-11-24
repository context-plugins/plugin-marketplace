import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { celebrityRecognitionSchema, type CelebrityRecognition } from "./celebrity-recognition.js";
import { jobStatusSchema, type JobStatus } from "./job-status.js";
import { videoMetadataSchema, type VideoMetadata } from "./video-metadata.js";
import { videoSchema, type Video } from "./video.js";

export type GetCelebrityRecognitionResponse = {
  /** The current status of the celebrity recognition job. */
  jobStatus?: JobStatus;
  /** If the job fails, StatusMessage provides a descriptive error message. */
  statusMessage?: string;
  videoMetadata?: VideoMetadata;
  /**
   * If the response is truncated, Amazon Rekognition Video returns this token that you can use in
   * the subsequent request to retrieve the next set of celebrities.
   */
  nextToken?: string;
  /** Array of celebrities recognized in the video. */
  celebrities?: CelebrityRecognition[];
  /**
   * Job identifier for the celebrity recognition operation for which you want to obtain results.
   * The job identifer is returned by an initial call to StartCelebrityRecognition.
   */
  jobId?: string;
  video?: Video;
  /**
   * A job identifier specified in the call to StartCelebrityRecognition and returned in the job
   * completion notification sent to your Amazon Simple Notification Service topic.
   */
  jobTag?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getCelebrityRecognitionResponseSchema: Schema<GetCelebrityRecognitionResponse> =
  s.object<GetCelebrityRecognitionResponse>(
    {
      jobStatus: s.optional(s.lazy(() => jobStatusSchema)),
      statusMessage: s.optional(s.string()),
      videoMetadata: s.optional(s.lazy(() => videoMetadataSchema)),
      nextToken: s.optional(s.string()),
      celebrities: s.optional(s.array(s.lazy(() => celebrityRecognitionSchema))),
      jobId: s.optional(s.string()),
      video: s.optional(s.lazy(() => videoSchema)),
      jobTag: s.optional(s.string()),
      _keysMap: {
        jobStatus: "JobStatus",
        statusMessage: "StatusMessage",
        videoMetadata: "VideoMetadata",
        nextToken: "NextToken",
        celebrities: "Celebrities",
        jobId: "JobId",
        video: "Video",
        jobTag: "JobTag",
      },
    },
    { additionalProperties: s.json() },
  );
