import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Media = {
  /**
   * The Amazon S3 location of the media file you want to transcribe. For example:
   * s3://DOC-EXAMPLE-BUCKET/my-media-file.flac
   * s3://DOC-EXAMPLE-BUCKET/media-files/my-media-file.flac Note that the Amazon S3 bucket that
   * contains your input media must be located in the same Amazon Web Services Region where you're
   * making your transcription request.
   */
  mediaFileUri?: string;
  /**
   * The Amazon S3 location of the media file you want to redact. For example:
   * s3://DOC-EXAMPLE-BUCKET/my-media-file.flac
   * s3://DOC-EXAMPLE-BUCKET/media-files/my-media-file.flac Note that the Amazon S3 bucket that
   * contains your input media must be located in the same Amazon Web Services Region where you're
   * making your transcription request. RedactedMediaFileUri produces a redacted audio file in
   * addition to a redacted transcript. It is only supported for Call Analytics
   * (StartCallAnalyticsJob) transcription requests.
   */
  redactedMediaFileUri?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const mediaSchema: Schema<Media> = s.object<Media>(
  {
    mediaFileUri: s.optional(s.string()),
    redactedMediaFileUri: s.optional(s.string()),
    _keysMap: {
      mediaFileUri: "MediaFileUri",
      redactedMediaFileUri: "RedactedMediaFileUri",
    },
  },
  { additionalProperties: s.json() },
);
