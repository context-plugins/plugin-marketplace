import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  recurringBillReadResponseDtoSchema,
  type RecurringBillReadResponseDto,
} from "./recurring-bill-read-response-dto.js";

/** Get list of recurring bills response. */
export type ListRecurringBillResponseDto = {
  nextPage?: string;
  prevPage?: string;
  results?: RecurringBillReadResponseDto[];
  /** Total number of recurring bills matching the list request, across all pages of results. */
  count?: number;
  /**
   * Sum of the amounts of all recurring bills matching the list request, across all pages of
   * results.
   */
  totalAmount?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listRecurringBillResponseDtoSchema: Schema<ListRecurringBillResponseDto> =
  s.object<ListRecurringBillResponseDto>(
    {
      nextPage: s.optional(s.string()),
      prevPage: s.optional(s.string()),
      results: s.optional(s.array(s.lazy(() => recurringBillReadResponseDtoSchema))),
      count: s.optional(s.int()),
      totalAmount: s.optional(s.float64()),
    },
    { additionalProperties: s.json() },
  );
