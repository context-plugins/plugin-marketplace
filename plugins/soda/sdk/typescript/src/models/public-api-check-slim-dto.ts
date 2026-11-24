import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { evaluationStatusDtoSchema, type EvaluationStatusDto } from "./evaluation-status-dto.js";

export type PublicApiCheckSlimDto = {
  evaluationStatus?: EvaluationStatusDto;
  id?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiCheckSlimDtoSchema: Schema<PublicApiCheckSlimDto> = s.object<PublicApiCheckSlimDto>(
  {
    evaluationStatus: s.optional(s.lazy(() => evaluationStatusDtoSchema)),
    id: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
