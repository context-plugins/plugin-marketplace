import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  customFieldValueResponseDtoSchema,
  type CustomFieldValueResponseDto,
} from "./custom-field-value-response-dto.js";

/** Response from a list API request with paging references. */
export type PaginationResponseDtoCustomFieldValueResponseDto = {
  /** Next page token */
  nextPage?: string;
  /** Previous page token */
  prevPage?: string;
  /** Results */
  results?: CustomFieldValueResponseDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const paginationResponseDtoCustomFieldValueResponseDtoSchema: Schema<PaginationResponseDtoCustomFieldValueResponseDto> =
  s.object<PaginationResponseDtoCustomFieldValueResponseDto>(
    {
      nextPage: s.optional(s.string()),
      prevPage: s.optional(s.string()),
      results: s.optional(s.array(s.lazy(() => customFieldValueResponseDtoSchema))),
    },
    { additionalProperties: s.json() },
  );
