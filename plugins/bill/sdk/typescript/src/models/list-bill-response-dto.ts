import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  billReadWithoutApproversResponseDtoInternalSchema,
  billReadWithoutApproversResponseDtoSchema,
  type BillReadWithoutApproversResponseDto,
} from "./bill-read-without-approvers-response-dto.js";

/** Response from a list API request with paging references. */
export type ListBillResponseDto = {
  nextPage?: string;
  prevPage?: string;
  results?: BillReadWithoutApproversResponseDto[];
  /** Total number of bills matching the list request, across all pages of results. */
  count?: number;
  /**
   * Sum of the balances of all bills matching the list request, across all pages of results. This
   * value is in the organization's base currency.
   */
  totalDueAmount?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const listBillResponseDtoProperties: s.Shape<ListBillResponseDto> = {
  nextPage: s.optional(s.string()),
  prevPage: s.optional(s.string()),
  results: s.optional(s.array(s.lazy(() => billReadWithoutApproversResponseDtoInternalSchema))),
  count: s.optional(s.int()),
  totalDueAmount: s.optional(s.float64()),
};

export const listBillResponseDtoInternalSchema: Schema<ListBillResponseDto> = s.object<ListBillResponseDto>(
  listBillResponseDtoProperties,
  { additionalProperties: s.json() },
);

export const listBillResponseDtoSchema: Schema<ListBillResponseDto> = s.lazySchema(() =>
  s.object<ListBillResponseDto>(
    {
      ...listBillResponseDtoProperties,
      results: s.optional(s.array(s.lazy(() => billReadWithoutApproversResponseDtoSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
