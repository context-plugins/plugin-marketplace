import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  classificationJobResponseDtoSchema,
  type ClassificationJobResponseDto,
} from "./classification-job-response-dto.js";

/** Response Dto for bulk classification job. */
export type ClassificationJobBulkResponseDto = {
  /** List of jobs */
  jobs?: ClassificationJobResponseDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const classificationJobBulkResponseDtoSchema: Schema<ClassificationJobBulkResponseDto> =
  s.object<ClassificationJobBulkResponseDto>(
    {
      jobs: s.optional(s.array(s.lazy(() => classificationJobResponseDtoSchema))),
    },
    { additionalProperties: s.json() },
  );
