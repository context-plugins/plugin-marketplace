import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { customFieldValueDtoSchema, type CustomFieldValueDto } from "./custom-field-value-dto.js";

/** Response from a list API request with paging references. */
export type PaginationResponseDtoCustomFieldValueDto = {
  /** Next page token */
  nextPage?: string;
  /** Previous page token */
  prevPage?: string;
  /** Results */
  results?: CustomFieldValueDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const paginationResponseDtoCustomFieldValueDtoSchema: Schema<PaginationResponseDtoCustomFieldValueDto> =
  s.object<PaginationResponseDtoCustomFieldValueDto>(
    {
      nextPage: s.optional(s.string()),
      prevPage: s.optional(s.string()),
      results: s.optional(s.array(s.lazy(() => customFieldValueDtoSchema))),
    },
    { additionalProperties: s.json() },
  );
