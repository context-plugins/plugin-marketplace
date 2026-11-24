import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  transcribestreamingMedicalTranscriptSchema,
  type TranscribestreamingMedicalTranscript,
} from "./transcribestreaming-medical-transcript.js";

export type MedicalTranscriptEvent = {
  transcript?: TranscribestreamingMedicalTranscript;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const medicalTranscriptEventSchema: Schema<MedicalTranscriptEvent> = s.object<MedicalTranscriptEvent>(
  {
    transcript: s.optional(s.lazy(() => transcribestreamingMedicalTranscriptSchema)),
    _keysMap: {
      transcript: "Transcript",
    },
  },
  { additionalProperties: s.json() },
);
