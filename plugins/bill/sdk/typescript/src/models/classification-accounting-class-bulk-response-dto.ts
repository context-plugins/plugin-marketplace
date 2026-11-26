import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  classificationAccountingClassResponseDtoSchema,
  type ClassificationAccountingClassResponseDto,
} from "./classification-accounting-class-response-dto.js";

/** Response Dto for bulk classification accounting class. */
export type ClassificationAccountingClassBulkResponseDto = {
  /** List of accounting classes */
  accountingClasses?: ClassificationAccountingClassResponseDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const classificationAccountingClassBulkResponseDtoSchema: Schema<ClassificationAccountingClassBulkResponseDto> =
  s.object<ClassificationAccountingClassBulkResponseDto>(
    {
      accountingClasses: s.optional(s.array(s.lazy(() => classificationAccountingClassResponseDtoSchema))),
    },
    { additionalProperties: s.json() },
  );
