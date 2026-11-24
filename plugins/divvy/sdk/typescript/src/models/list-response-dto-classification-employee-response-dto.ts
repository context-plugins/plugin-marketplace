import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  classificationEmployeeResponseDtoSchema,
  type ClassificationEmployeeResponseDto,
} from "./classification-employee-response-dto.js";

/** Response from a list API request with paging references. */
export type ListResponseDtoClassificationEmployeeResponseDto = {
  nextPage?: string;
  prevPage?: string;
  results?: ClassificationEmployeeResponseDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listResponseDtoClassificationEmployeeResponseDtoSchema: Schema<ListResponseDtoClassificationEmployeeResponseDto> =
  s.object<ListResponseDtoClassificationEmployeeResponseDto>(
    {
      nextPage: s.optional(s.string()),
      prevPage: s.optional(s.string()),
      results: s.optional(s.array(s.lazy(() => classificationEmployeeResponseDtoSchema))),
    },
    { additionalProperties: s.json() },
  );
