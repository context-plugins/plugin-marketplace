import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  recurringBillReadResponseDtoSchema,
  type RecurringBillReadResponseDto,
} from "./recurring-bill-read-response-dto.js";

/** Response from a list API request with paging references. */
export type ListResponseDtoRecurringBillReadResponseDto = {
  nextPage?: string;
  prevPage?: string;
  results?: RecurringBillReadResponseDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listResponseDtoRecurringBillReadResponseDtoSchema: Schema<ListResponseDtoRecurringBillReadResponseDto> =
  s.object<ListResponseDtoRecurringBillReadResponseDto>(
    {
      nextPage: s.optional(s.string()),
      prevPage: s.optional(s.string()),
      results: s.optional(s.array(s.lazy(() => recurringBillReadResponseDtoSchema))),
    },
    { additionalProperties: s.json() },
  );
