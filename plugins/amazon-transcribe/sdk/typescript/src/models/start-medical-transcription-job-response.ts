import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { medicalTranscriptionJobSchema, type MedicalTranscriptionJob } from "./medical-transcription-job.js";

export type StartMedicalTranscriptionJobResponse = {
  medicalTranscriptionJob?: MedicalTranscriptionJob;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startMedicalTranscriptionJobResponseSchema: Schema<StartMedicalTranscriptionJobResponse> =
  s.object<StartMedicalTranscriptionJobResponse>(
    {
      medicalTranscriptionJob: s.optional(s.lazy(() => medicalTranscriptionJobSchema)),
      _keysMap: {
        medicalTranscriptionJob: "MedicalTranscriptionJob",
      },
    },
    { additionalProperties: s.json() },
  );
