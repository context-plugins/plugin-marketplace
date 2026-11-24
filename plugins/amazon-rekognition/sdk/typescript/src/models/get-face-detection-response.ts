import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { faceDetectionSchema, type FaceDetection } from "./face-detection.js";
import {
  jobStatusAmazonRekognitionOperationsApiSchema,
  type JobStatusAmazonRekognitionOperationsApi,
} from "./job-status-amazon-rekognition-operations-api.js";
import { videoMetadataSchema, type VideoMetadata } from "./video-metadata.js";
import { videoSchema, type Video } from "./video.js";

export type GetFaceDetectionResponse = {
  /** The current status of the face detection job. */
  jobStatus?: JobStatusAmazonRekognitionOperationsApi;
  /** If the job fails, StatusMessage provides a descriptive error message. */
  statusMessage?: string;
  videoMetadata?: VideoMetadata;
  /**
   * If the response is truncated, Amazon Rekognition returns this token that you can use in the
   * subsequent request to retrieve the next set of faces.
   */
  nextToken?: string;
  /**
   * An array of faces detected in the video. Each element contains a detected face's details and
   * the time, in milliseconds from the start of the video, the face was detected.
   */
  faces?: FaceDetection[];
  /**
   * Job identifier for the face detection operation for which you want to obtain results. The job
   * identifer is returned by an initial call to StartFaceDetection.
   */
  jobId?: string;
  video?: Video;
  /**
   * A job identifier specified in the call to StartFaceDetection and returned in the job completion
   * notification sent to your Amazon Simple Notification Service topic.
   */
  jobTag?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getFaceDetectionResponseSchema: Schema<GetFaceDetectionResponse> =
  s.object<GetFaceDetectionResponse>(
    {
      jobStatus: s.optional(s.lazy(() => jobStatusAmazonRekognitionOperationsApiSchema)),
      statusMessage: s.optional(s.string()),
      videoMetadata: s.optional(s.lazy(() => videoMetadataSchema)),
      nextToken: s.optional(s.string()),
      faces: s.optional(s.array(s.lazy(() => faceDetectionSchema))),
      jobId: s.optional(s.string()),
      video: s.optional(s.lazy(() => videoSchema)),
      jobTag: s.optional(s.string()),
      _keysMap: {
        jobStatus: "JobStatus",
        statusMessage: "StatusMessage",
        videoMetadata: "VideoMetadata",
        nextToken: "NextToken",
        faces: "Faces",
        jobId: "JobId",
        video: "Video",
        jobTag: "JobTag",
      },
    },
    { additionalProperties: s.json() },
  );
