import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type MedicalScribeOutput = {
  /** Holds the Amazon S3 URI for the Transcript. */
  transcriptFileUri: string;
  /** Holds the Amazon S3 URI for the Clinical Document. */
  clinicalDocumentUri: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const medicalScribeOutputSchema: Schema<MedicalScribeOutput> = s.object<MedicalScribeOutput>(
  {
    transcriptFileUri: s.string(),
    clinicalDocumentUri: s.string(),
    _keysMap: {
      transcriptFileUri: "TranscriptFileUri",
      clinicalDocumentUri: "ClinicalDocumentUri",
    },
  },
  { additionalProperties: s.json() },
);
