import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type MedicalTranscript = {
  /**
   * The Amazon S3 location of your transcript. You can use this URI to access or download your
   * transcript. Note that this is the Amazon S3 location you specified in your request using the
   * OutputBucketName parameter.
   */
  transcriptFileUri?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const medicalTranscriptSchema: Schema<MedicalTranscript> = s.object<MedicalTranscript>(
  {
    transcriptFileUri: s.optional(s.string()),
    _keysMap: {
      transcriptFileUri: "TranscriptFileUri",
    },
  },
  { additionalProperties: s.json() },
);
