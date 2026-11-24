import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  medicalScribeStreamDetailsSchema,
  type MedicalScribeStreamDetails,
} from "./medical-scribe-stream-details.js";

export type GetMedicalScribeStreamResponse = {
  medicalScribeStreamDetails?: MedicalScribeStreamDetails;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getMedicalScribeStreamResponseSchema: Schema<GetMedicalScribeStreamResponse> =
  s.object<GetMedicalScribeStreamResponse>(
    {
      medicalScribeStreamDetails: s.optional(s.lazy(() => medicalScribeStreamDetailsSchema)),
      _keysMap: {
        medicalScribeStreamDetails: "MedicalScribeStreamDetails",
      },
    },
    { additionalProperties: s.json() },
  );
