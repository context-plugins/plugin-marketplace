import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { evaluationStatusDtoSchema, type EvaluationStatusDto } from "./evaluation-status-dto.js";

export type CheckResultValueSeriesDtoValueSeriesValue = {
  label?: string;
  level?: EvaluationStatusDto;
  value?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const checkResultValueSeriesDtoValueSeriesValueSchema: Schema<CheckResultValueSeriesDtoValueSeriesValue> =
  s.object<CheckResultValueSeriesDtoValueSeriesValue>(
    {
      label: s.optional(s.string()),
      level: s.optional(s.lazy(() => evaluationStatusDtoSchema)),
      value: s.optional(s.float64()),
    },
    { additionalProperties: s.json() },
  );
