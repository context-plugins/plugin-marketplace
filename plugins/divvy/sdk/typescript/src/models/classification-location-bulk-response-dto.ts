import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  classificationLocationResponseDtoSchema,
  type ClassificationLocationResponseDto,
} from "./classification-location-response-dto.js";

/** Response Dto for bulk classification location. */
export type ClassificationLocationBulkResponseDto = {
  /** List of locations */
  locations?: ClassificationLocationResponseDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const classificationLocationBulkResponseDtoSchema: Schema<ClassificationLocationBulkResponseDto> =
  s.object<ClassificationLocationBulkResponseDto>(
    {
      locations: s.optional(s.array(s.lazy(() => classificationLocationResponseDtoSchema))),
    },
    { additionalProperties: s.json() },
  );
