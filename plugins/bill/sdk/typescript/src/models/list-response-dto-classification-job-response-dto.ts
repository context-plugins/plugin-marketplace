import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  classificationJobResponseDtoSchema,
  type ClassificationJobResponseDto,
} from "./classification-job-response-dto.js";

/** Response from a list API request with paging references. */
export type ListResponseDtoClassificationJobResponseDto = {
  nextPage?: string;
  prevPage?: string;
  results?: ClassificationJobResponseDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listResponseDtoClassificationJobResponseDtoSchema: Schema<ListResponseDtoClassificationJobResponseDto> =
  s.object<ListResponseDtoClassificationJobResponseDto>(
    {
      nextPage: s.optional(s.string()),
      prevPage: s.optional(s.string()),
      results: s.optional(s.array(s.lazy(() => classificationJobResponseDtoSchema))),
    },
    { additionalProperties: s.json() },
  );
