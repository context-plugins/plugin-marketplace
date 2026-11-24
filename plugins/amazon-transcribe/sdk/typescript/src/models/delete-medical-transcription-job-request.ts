import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeleteMedicalTranscriptionJobRequest = {
  /** The name of the medical transcription job you want to delete. Job names are case sensitive. */
  medicalTranscriptionJobName: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteMedicalTranscriptionJobRequestSchema: Schema<DeleteMedicalTranscriptionJobRequest> =
  s.object<DeleteMedicalTranscriptionJobRequest>(
    {
      medicalTranscriptionJobName: s.string(),
      _keysMap: {
        medicalTranscriptionJobName: "MedicalTranscriptionJobName",
      },
    },
    { additionalProperties: s.json() },
  );
