import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { audioMetadataSchema, type AudioMetadata } from "./audio-metadata.js";
import { jobStatus2Schema, type JobStatus2 } from "./job-status2.js";
import { segmentDetectionSchema, type SegmentDetection } from "./segment-detection.js";
import { segmentTypeInfoSchema, type SegmentTypeInfo } from "./segment-type-info.js";
import { videoMetadataSchema, type VideoMetadata } from "./video-metadata.js";
import { videoSchema, type Video } from "./video.js";

export type GetSegmentDetectionResponse = {
  /** Current status of the segment detection job. */
  jobStatus?: JobStatus2;
  /** If the job fails, StatusMessage provides a descriptive error message. */
  statusMessage?: string;
  /**
   * Currently, Amazon Rekognition Video returns a single object in the VideoMetadata array. The
   * object contains information about the video stream in the input file that Amazon Rekognition
   * Video chose to analyze. The VideoMetadata object includes the video codec, video format and
   * other information. Video metadata is returned in each page of information returned by
   * GetSegmentDetection.
   */
  videoMetadata?: VideoMetadata[];
  /**
   * An array of objects. There can be multiple audio streams. Each AudioMetadata object contains
   * metadata for a single audio stream. Audio information in an AudioMetadata objects includes the
   * audio codec, the number of audio channels, the duration of the audio stream, and the sample
   * rate. Audio metadata is returned in each page of information returned by GetSegmentDetection.
   */
  audioMetadata?: AudioMetadata[];
  /**
   * If the previous response was incomplete (because there are more labels to retrieve), Amazon
   * Rekognition Video returns a pagination token in the response. You can use this pagination token
   * to retrieve the next set of text.
   */
  nextToken?: string;
  /**
   * An array of segments detected in a video. The array is sorted by the segment types
   * (TECHNICAL_CUE or SHOT) specified in the SegmentTypes input parameter of StartSegmentDetection.
   * Within each segment type the array is sorted by timestamp values.
   */
  segments?: SegmentDetection[];
  /** An array containing the segment types requested in the call to StartSegmentDetection. */
  selectedSegmentTypes?: SegmentTypeInfo[];
  /**
   * Job identifier for the segment detection operation for which you want to obtain results. The
   * job identifer is returned by an initial call to StartSegmentDetection.
   */
  jobId?: string;
  video?: Video;
  /**
   * A job identifier specified in the call to StartSegmentDetection and returned in the job
   * completion notification sent to your Amazon Simple Notification Service topic.
   */
  jobTag?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getSegmentDetectionResponseSchema: Schema<GetSegmentDetectionResponse> =
  s.object<GetSegmentDetectionResponse>(
    {
      jobStatus: s.optional(s.lazy(() => jobStatus2Schema)),
      statusMessage: s.optional(s.string()),
      videoMetadata: s.optional(s.array(s.lazy(() => videoMetadataSchema))),
      audioMetadata: s.optional(s.array(s.lazy(() => audioMetadataSchema))),
      nextToken: s.optional(s.string()),
      segments: s.optional(s.array(s.lazy(() => segmentDetectionSchema))),
      selectedSegmentTypes: s.optional(s.array(s.lazy(() => segmentTypeInfoSchema))),
      jobId: s.optional(s.string()),
      video: s.optional(s.lazy(() => videoSchema)),
      jobTag: s.optional(s.string()),
      _keysMap: {
        jobStatus: "JobStatus",
        statusMessage: "StatusMessage",
        videoMetadata: "VideoMetadata",
        audioMetadata: "AudioMetadata",
        nextToken: "NextToken",
        segments: "Segments",
        selectedSegmentTypes: "SelectedSegmentTypes",
        jobId: "JobId",
        video: "Video",
        jobTag: "JobTag",
      },
    },
    { additionalProperties: s.json() },
  );
