import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  classificationLocationResponseDtoSchema,
  type ClassificationLocationResponseDto,
} from "./classification-location-response-dto.js";

/** Response from a list API request with paging references. */
export type ListResponseDtoClassificationLocationResponseDto = {
  nextPage?: string;
  prevPage?: string;
  results?: ClassificationLocationResponseDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listResponseDtoClassificationLocationResponseDtoSchema: Schema<ListResponseDtoClassificationLocationResponseDto> =
  s.object<ListResponseDtoClassificationLocationResponseDto>(
    {
      nextPage: s.optional(s.string()),
      prevPage: s.optional(s.string()),
      results: s.optional(s.array(s.lazy(() => classificationLocationResponseDtoSchema))),
    },
    { additionalProperties: s.json() },
  );
