import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  reimbursementResponseDtoInternalSchema,
  reimbursementResponseDtoSchema,
  type ReimbursementResponseDto,
} from "./reimbursement-response-dto.js";

/** Response from a list API request with paging references. */
export type PaginationResponseDtoReimbursementResponseDto = {
  /** Next page token */
  nextPage?: string;
  /** Previous page token */
  prevPage?: string;
  /** Results */
  results?: ReimbursementResponseDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const paginationResponseDtoReimbursementResponseDtoProperties: s.Shape<PaginationResponseDtoReimbursementResponseDto> =
  {
    nextPage: s.optional(s.string()),
    prevPage: s.optional(s.string()),
    results: s.optional(s.array(s.lazy(() => reimbursementResponseDtoInternalSchema))),
  };

export const paginationResponseDtoReimbursementResponseDtoInternalSchema: Schema<PaginationResponseDtoReimbursementResponseDto> =
  s.object<PaginationResponseDtoReimbursementResponseDto>(
    paginationResponseDtoReimbursementResponseDtoProperties,
    { additionalProperties: s.json() },
  );

export const paginationResponseDtoReimbursementResponseDtoSchema: Schema<PaginationResponseDtoReimbursementResponseDto> =
  s.lazySchema(() =>
    s.object<PaginationResponseDtoReimbursementResponseDto>(
      {
        ...paginationResponseDtoReimbursementResponseDtoProperties,
        results: s.optional(s.array(s.lazy(() => reimbursementResponseDtoSchema))),
      },
      { additionalProperties: s.json() },
    ),
  );
