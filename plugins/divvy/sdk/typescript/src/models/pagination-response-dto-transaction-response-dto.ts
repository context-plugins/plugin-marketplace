import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  transactionResponseDtoInternalSchema,
  transactionResponseDtoSchema,
  type TransactionResponseDto,
} from "./transaction-response-dto.js";

/** Response from a list API request with paging references. */
export type PaginationResponseDtoTransactionResponseDto = {
  /** Next page token */
  nextPage?: string;
  /** Previous page token */
  prevPage?: string;
  /** Results */
  results?: TransactionResponseDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const paginationResponseDtoTransactionResponseDtoProperties: s.Shape<PaginationResponseDtoTransactionResponseDto> =
  {
    nextPage: s.optional(s.string()),
    prevPage: s.optional(s.string()),
    results: s.optional(s.array(s.lazy(() => transactionResponseDtoInternalSchema))),
  };

export const paginationResponseDtoTransactionResponseDtoInternalSchema: Schema<PaginationResponseDtoTransactionResponseDto> =
  s.object<PaginationResponseDtoTransactionResponseDto>(
    paginationResponseDtoTransactionResponseDtoProperties,
    { additionalProperties: s.json() },
  );

export const paginationResponseDtoTransactionResponseDtoSchema: Schema<PaginationResponseDtoTransactionResponseDto> =
  s.lazySchema(() =>
    s.object<PaginationResponseDtoTransactionResponseDto>(
      {
        ...paginationResponseDtoTransactionResponseDtoProperties,
        results: s.optional(s.array(s.lazy(() => transactionResponseDtoSchema))),
      },
      { additionalProperties: s.json() },
    ),
  );
