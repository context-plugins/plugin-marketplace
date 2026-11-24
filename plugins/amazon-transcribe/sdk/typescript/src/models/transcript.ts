import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Transcript = {
  /**
   * The Amazon S3 location of your transcript. You can use this URI to access or download your
   * transcript. If you included OutputBucketName in your transcription job request, this is the URI
   * of that bucket. If you also included OutputKey in your request, your output is located in the
   * path you specified in your request. If you didn't include OutputBucketName in your
   * transcription job request, your transcript is stored in a service-managed bucket, and
   * TranscriptFileUri provides you with a temporary URI you can use for secure access to your
   * transcript. Temporary URIs for service-managed Amazon S3 buc
   */
  transcriptFileUri?: string;
  /**
   * The Amazon S3 location of your redacted transcript. You can use this URI to access or download
   * your transcript. If you included OutputBucketName in your transcription job request, this is
   * the URI of that bucket. If you also included OutputKey in your request, your output is located
   * in the path you specified in your request. If you didn't include OutputBucketName in your
   * transcription job request, your transcript is stored in a service-managed bucket, and
   * RedactedTranscriptFileUri provides you with a temporary URI you can use for secure access to
   * your transcript. Temporary URIs for service-mana
   */
  redactedTranscriptFileUri?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const transcriptSchema: Schema<Transcript> = s.object<Transcript>(
  {
    transcriptFileUri: s.optional(s.string()),
    redactedTranscriptFileUri: s.optional(s.string()),
    _keysMap: {
      transcriptFileUri: "TranscriptFileUri",
      redactedTranscriptFileUri: "RedactedTranscriptFileUri",
    },
  },
  { additionalProperties: s.json() },
);
