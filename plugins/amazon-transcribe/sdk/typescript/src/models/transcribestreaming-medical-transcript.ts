import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { medicalResultSchema, type MedicalResult } from "./medical-result.js";

export type TranscribestreamingMedicalTranscript = {
  /**
   * Contains a set of transcription results from one or more audio segments, along with additional
   * information per your request parameters. This can include information relating to alternative
   * transcriptions, channel identification, partial result stabilization, language identification,
   * and other transcription-related data.
   */
  results?: MedicalResult[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const transcribestreamingMedicalTranscriptSchema: Schema<TranscribestreamingMedicalTranscript> =
  s.object<TranscribestreamingMedicalTranscript>(
    {
      results: s.optional(s.array(s.lazy(() => medicalResultSchema))),
      _keysMap: {
        results: "Results",
      },
    },
    { additionalProperties: s.json() },
  );
