import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type GetMedicalTranscriptionJobRequest = {
  /**
   * The name of the medical transcription job you want information about. Job names are case
   * sensitive.
   */
  medicalTranscriptionJobName: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getMedicalTranscriptionJobRequestSchema: Schema<GetMedicalTranscriptionJobRequest> =
  s.object<GetMedicalTranscriptionJobRequest>(
    {
      medicalTranscriptionJobName: s.string(),
      _keysMap: {
        medicalTranscriptionJobName: "MedicalTranscriptionJobName",
      },
    },
    { additionalProperties: s.json() },
  );
