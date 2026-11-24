import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  clinicalNoteGenerationResultSchema,
  type ClinicalNoteGenerationResult,
} from "./clinical-note-generation-result.js";

export type MedicalScribePostStreamAnalyticsResult = {
  clinicalNoteGenerationResult?: ClinicalNoteGenerationResult;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const medicalScribePostStreamAnalyticsResultSchema: Schema<MedicalScribePostStreamAnalyticsResult> =
  s.object<MedicalScribePostStreamAnalyticsResult>(
    {
      clinicalNoteGenerationResult: s.optional(s.lazy(() => clinicalNoteGenerationResultSchema)),
      _keysMap: {
        clinicalNoteGenerationResult: "ClinicalNoteGenerationResult",
      },
    },
    { additionalProperties: s.json() },
  );
