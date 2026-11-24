import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  classificationEmployeeResponseDtoSchema,
  type ClassificationEmployeeResponseDto,
} from "./classification-employee-response-dto.js";

/** Response Dto for bulk classification employee. */
export type ClassificationEmployeeBulkResponseDto = {
  /** List of employees */
  employees?: ClassificationEmployeeResponseDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const classificationEmployeeBulkResponseDtoSchema: Schema<ClassificationEmployeeBulkResponseDto> =
  s.object<ClassificationEmployeeBulkResponseDto>(
    {
      employees: s.optional(s.array(s.lazy(() => classificationEmployeeResponseDtoSchema))),
    },
    { additionalProperties: s.json() },
  );
