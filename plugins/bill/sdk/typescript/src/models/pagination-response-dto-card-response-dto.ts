import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { cardResponseDtoSchema, type CardResponseDto } from "./card-response-dto.js";

/** Response from a list API request with paging references. */
export type PaginationResponseDtoCardResponseDto = {
  /** Next page token */
  nextPage?: string;
  /** Previous page token */
  prevPage?: string;
  /** Results */
  results?: CardResponseDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const paginationResponseDtoCardResponseDtoSchema: Schema<PaginationResponseDtoCardResponseDto> =
  s.object<PaginationResponseDtoCardResponseDto>(
    {
      nextPage: s.optional(s.string()),
      prevPage: s.optional(s.string()),
      results: s.optional(s.array(s.lazy(() => cardResponseDtoSchema))),
    },
    { additionalProperties: s.json() },
  );
