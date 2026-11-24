import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CheckResultAnomalyDetectionDetailsDto = {
  predictedValue?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const checkResultAnomalyDetectionDetailsDtoSchema: Schema<CheckResultAnomalyDetectionDetailsDto> =
  s.object<CheckResultAnomalyDetectionDetailsDto>(
    {
      predictedValue: s.optional(s.float64()),
    },
    { additionalProperties: s.json() },
  );
