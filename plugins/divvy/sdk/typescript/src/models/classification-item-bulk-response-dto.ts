import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  classificationItemResponseDtoSchema,
  type ClassificationItemResponseDto,
} from "./classification-item-response-dto.js";

/** Response Dto for bulk classification item. */
export type ClassificationItemBulkResponseDto = {
  /** List of items */
  items?: ClassificationItemResponseDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const classificationItemBulkResponseDtoSchema: Schema<ClassificationItemBulkResponseDto> =
  s.object<ClassificationItemBulkResponseDto>(
    {
      items: s.optional(s.array(s.lazy(() => classificationItemResponseDtoSchema))),
    },
    { additionalProperties: s.json() },
  );
