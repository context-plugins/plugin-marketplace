import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  medicalScribePatientContextSchema,
  type MedicalScribePatientContext,
} from "./medical-scribe-patient-context.js";

export type MedicalScribeContext = {
  patientContext?: MedicalScribePatientContext;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const medicalScribeContextSchema: Schema<MedicalScribeContext> = s.object<MedicalScribeContext>(
  {
    patientContext: s.optional(s.lazy(() => medicalScribePatientContextSchema)),
    _keysMap: {
      patientContext: "PatientContext",
    },
  },
  { additionalProperties: s.json() },
);
