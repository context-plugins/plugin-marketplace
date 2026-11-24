import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  classificationDepartmentResponseDtoSchema,
  type ClassificationDepartmentResponseDto,
} from "./classification-department-response-dto.js";

/** Response Dto for bulk classification department. */
export type ClassificationDepartmentBulkResponseDto = {
  /** List of departments */
  departments?: ClassificationDepartmentResponseDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const classificationDepartmentBulkResponseDtoSchema: Schema<ClassificationDepartmentBulkResponseDto> =
  s.object<ClassificationDepartmentBulkResponseDto>(
    {
      departments: s.optional(s.array(s.lazy(() => classificationDepartmentResponseDtoSchema))),
    },
    { additionalProperties: s.json() },
  );
