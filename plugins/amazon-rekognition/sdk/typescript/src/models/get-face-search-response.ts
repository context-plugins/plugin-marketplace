import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  jobStatusAmazonRekognitionFaceSearchApiSchema,
  type JobStatusAmazonRekognitionFaceSearchApi,
} from "./job-status-amazon-rekognition-face-search-api.js";
import { personMatchSchema, type PersonMatch } from "./person-match.js";
import { videoMetadataSchema, type VideoMetadata } from "./video-metadata.js";
import { videoSchema, type Video } from "./video.js";

export type GetFaceSearchResponse = {
  /** The current status of the face search job. */
  jobStatus?: JobStatusAmazonRekognitionFaceSearchApi;
  /** If the job fails, StatusMessage provides a descriptive error message. */
  statusMessage?: string;
  /**
   * If the response is truncated, Amazon Rekognition Video returns this token that you can use in
   * the subsequent request to retrieve the next set of search results.
   */
  nextToken?: string;
  videoMetadata?: VideoMetadata;
  /**
   * An array of persons, PersonMatch, in the video whose face(s) match the face(s) in an Amazon
   * Rekognition collection. It also includes time information for when persons are matched in the
   * video. You specify the input collection in an initial call to StartFaceSearch. Each Persons
   * element includes a time the person was matched, face match details (FaceMatches) for matching
   * faces in the collection, and person information (Person) for the matched person.
   */
  persons?: PersonMatch[];
  /**
   * Job identifier for the face search operation for which you want to obtain results. The job
   * identifer is returned by an initial call to StartFaceSearch.
   */
  jobId?: string;
  video?: Video;
  /**
   * A job identifier specified in the call to StartFaceSearch and returned in the job completion
   * notification sent to your Amazon Simple Notification Service topic.
   */
  jobTag?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getFaceSearchResponseSchema: Schema<GetFaceSearchResponse> = s.object<GetFaceSearchResponse>(
  {
    jobStatus: s.optional(s.lazy(() => jobStatusAmazonRekognitionFaceSearchApiSchema)),
    statusMessage: s.optional(s.string()),
    nextToken: s.optional(s.string()),
    videoMetadata: s.optional(s.lazy(() => videoMetadataSchema)),
    persons: s.optional(s.array(s.lazy(() => personMatchSchema))),
    jobId: s.optional(s.string()),
    video: s.optional(s.lazy(() => videoSchema)),
    jobTag: s.optional(s.string()),
    _keysMap: {
      jobStatus: "JobStatus",
      statusMessage: "StatusMessage",
      nextToken: "NextToken",
      videoMetadata: "VideoMetadata",
      persons: "Persons",
      jobId: "JobId",
      video: "Video",
      jobTag: "JobTag",
    },
  },
  { additionalProperties: s.json() },
);
