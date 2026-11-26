import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  classificationItemResponseDtoSchema,
  type ClassificationItemResponseDto,
} from "./classification-item-response-dto.js";

/** Response from a list API request with paging references. */
export type ListResponseDtoClassificationItemResponseDto = {
  nextPage?: string;
  prevPage?: string;
  results?: ClassificationItemResponseDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listResponseDtoClassificationItemResponseDtoSchema: Schema<ListResponseDtoClassificationItemResponseDto> =
  s.object<ListResponseDtoClassificationItemResponseDto>(
    {
      nextPage: s.optional(s.string()),
      prevPage: s.optional(s.string()),
      results: s.optional(s.array(s.lazy(() => classificationItemResponseDtoSchema))),
    },
    { additionalProperties: s.json() },
  );
