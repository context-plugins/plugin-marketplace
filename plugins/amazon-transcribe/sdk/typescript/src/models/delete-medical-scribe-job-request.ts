import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeleteMedicalScribeJobRequest = {
  /** The name of the Medical Scribe job you want to delete. Job names are case sensitive. */
  medicalScribeJobName: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteMedicalScribeJobRequestSchema: Schema<DeleteMedicalScribeJobRequest> =
  s.object<DeleteMedicalScribeJobRequest>(
    {
      medicalScribeJobName: s.string(),
      _keysMap: {
        medicalScribeJobName: "MedicalScribeJobName",
      },
    },
    { additionalProperties: s.json() },
  );
