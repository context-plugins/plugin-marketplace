import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  classificationDepartmentResponseDtoSchema,
  type ClassificationDepartmentResponseDto,
} from "./classification-department-response-dto.js";

/** Response from a list API request with paging references. */
export type ListResponseDtoClassificationDepartmentResponseDto = {
  nextPage?: string;
  prevPage?: string;
  results?: ClassificationDepartmentResponseDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listResponseDtoClassificationDepartmentResponseDtoSchema: Schema<ListResponseDtoClassificationDepartmentResponseDto> =
  s.object<ListResponseDtoClassificationDepartmentResponseDto>(
    {
      nextPage: s.optional(s.string()),
      prevPage: s.optional(s.string()),
      results: s.optional(s.array(s.lazy(() => classificationDepartmentResponseDtoSchema))),
    },
    { additionalProperties: s.json() },
  );
