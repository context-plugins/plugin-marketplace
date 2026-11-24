import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { customFieldResponseDtoSchema, type CustomFieldResponseDto } from "./custom-field-response-dto.js";

/** Response from a list API request with paging references. */
export type PaginationResponseDtoCustomFieldResponseDto = {
  /** Next page token */
  nextPage?: string;
  /** Previous page token */
  prevPage?: string;
  /** Results */
  results?: CustomFieldResponseDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const paginationResponseDtoCustomFieldResponseDtoSchema: Schema<PaginationResponseDtoCustomFieldResponseDto> =
  s.object<PaginationResponseDtoCustomFieldResponseDto>(
    {
      nextPage: s.optional(s.string()),
      prevPage: s.optional(s.string()),
      results: s.optional(s.array(s.lazy(() => customFieldResponseDtoSchema))),
    },
    { additionalProperties: s.json() },
  );
