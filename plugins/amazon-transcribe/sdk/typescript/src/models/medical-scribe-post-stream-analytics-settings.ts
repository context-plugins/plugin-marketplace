import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  transcribestreamingClinicalNoteGenerationSettingsSchema,
  type TranscribestreamingClinicalNoteGenerationSettings,
} from "./transcribestreaming-clinical-note-generation-settings.js";

export type MedicalScribePostStreamAnalyticsSettings = {
  clinicalNoteGenerationSettings: TranscribestreamingClinicalNoteGenerationSettings;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const medicalScribePostStreamAnalyticsSettingsSchema: Schema<MedicalScribePostStreamAnalyticsSettings> =
  s.object<MedicalScribePostStreamAnalyticsSettings>(
    {
      clinicalNoteGenerationSettings: transcribestreamingClinicalNoteGenerationSettingsSchema,
      _keysMap: {
        clinicalNoteGenerationSettings: "ClinicalNoteGenerationSettings",
      },
    },
    { additionalProperties: s.json() },
  );
