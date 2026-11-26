import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  classificationAccountingClassResponseDtoSchema,
  type ClassificationAccountingClassResponseDto,
} from "./classification-accounting-class-response-dto.js";

/** Response from a list API request with paging references. */
export type ListResponseDtoClassificationAccountingClassResponseDto = {
  nextPage?: string;
  prevPage?: string;
  results?: ClassificationAccountingClassResponseDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listResponseDtoClassificationAccountingClassResponseDtoSchema: Schema<ListResponseDtoClassificationAccountingClassResponseDto> =
  s.object<ListResponseDtoClassificationAccountingClassResponseDto>(
    {
      nextPage: s.optional(s.string()),
      prevPage: s.optional(s.string()),
      results: s.optional(s.array(s.lazy(() => classificationAccountingClassResponseDtoSchema))),
    },
    { additionalProperties: s.json() },
  );
