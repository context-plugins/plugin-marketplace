import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { medicalScribeJobSchema, type MedicalScribeJob } from "./medical-scribe-job.js";

export type GetMedicalScribeJobResponse = {
  medicalScribeJob?: MedicalScribeJob;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getMedicalScribeJobResponseSchema: Schema<GetMedicalScribeJobResponse> =
  s.object<GetMedicalScribeJobResponse>(
    {
      medicalScribeJob: s.optional(s.lazy(() => medicalScribeJobSchema)),
      _keysMap: {
        medicalScribeJob: "MedicalScribeJob",
      },
    },
    { additionalProperties: s.json() },
  );
