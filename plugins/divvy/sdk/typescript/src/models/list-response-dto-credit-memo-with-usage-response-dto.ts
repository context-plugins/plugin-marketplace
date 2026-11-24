import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  creditMemoWithUsageResponseDtoSchema,
  type CreditMemoWithUsageResponseDto,
} from "./credit-memo-with-usage-response-dto.js";

/** Response from a list API request with paging references. */
export type ListResponseDtoCreditMemoWithUsageResponseDto = {
  nextPage?: string;
  prevPage?: string;
  results?: CreditMemoWithUsageResponseDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listResponseDtoCreditMemoWithUsageResponseDtoSchema: Schema<ListResponseDtoCreditMemoWithUsageResponseDto> =
  s.object<ListResponseDtoCreditMemoWithUsageResponseDto>(
    {
      nextPage: s.optional(s.string()),
      prevPage: s.optional(s.string()),
      results: s.optional(s.array(s.lazy(() => creditMemoWithUsageResponseDtoSchema))),
    },
    { additionalProperties: s.json() },
  );
