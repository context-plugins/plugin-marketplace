import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { jobStatus1Schema, type JobStatus1 } from "./job-status1.js";
import { personDetectionSchema, type PersonDetection } from "./person-detection.js";
import { videoMetadataSchema, type VideoMetadata } from "./video-metadata.js";
import { videoSchema, type Video } from "./video.js";

export type GetPersonTrackingResponse = {
  /** The current status of the person tracking job. */
  jobStatus?: JobStatus1;
  /** If the job fails, StatusMessage provides a descriptive error message. */
  statusMessage?: string;
  videoMetadata?: VideoMetadata;
  /**
   * If the response is truncated, Amazon Rekognition Video returns this token that you can use in
   * the subsequent request to retrieve the next set of persons.
   */
  nextToken?: string;
  /**
   * An array of the persons detected in the video and the time(s) their path was tracked throughout
   * the video. An array element will exist for each time a person's path is tracked.
   */
  persons?: PersonDetection[];
  /**
   * Job identifier for the person tracking operation for which you want to obtain results. The job
   * identifer is returned by an initial call to StartPersonTracking.
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

export const getPersonTrackingResponseSchema: Schema<GetPersonTrackingResponse> =
  s.object<GetPersonTrackingResponse>(
    {
      jobStatus: s.optional(s.lazy(() => jobStatus1Schema)),
      statusMessage: s.optional(s.string()),
      videoMetadata: s.optional(s.lazy(() => videoMetadataSchema)),
      nextToken: s.optional(s.string()),
      persons: s.optional(s.array(s.lazy(() => personDetectionSchema))),
      jobId: s.optional(s.string()),
      video: s.optional(s.lazy(() => videoSchema)),
      jobTag: s.optional(s.string()),
      _keysMap: {
        jobStatus: "JobStatus",
        statusMessage: "StatusMessage",
        videoMetadata: "VideoMetadata",
        nextToken: "NextToken",
        persons: "Persons",
        jobId: "JobId",
        video: "Video",
        jobTag: "JobTag",
      },
    },
    { additionalProperties: s.json() },
  );
