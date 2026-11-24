import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { budgetResponseDtoSchema, type BudgetResponseDto } from "./budget-response-dto.js";

/** Response from a list API request with paging references. */
export type PaginationResponseDtoBudgetResponseDto = {
  /** Next page token */
  nextPage?: string;
  /** Previous page token */
  prevPage?: string;
  /** Results */
  results?: BudgetResponseDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const paginationResponseDtoBudgetResponseDtoSchema: Schema<PaginationResponseDtoBudgetResponseDto> =
  s.object<PaginationResponseDtoBudgetResponseDto>(
    {
      nextPage: s.optional(s.string()),
      prevPage: s.optional(s.string()),
      results: s.optional(s.array(s.lazy(() => budgetResponseDtoSchema))),
    },
    { additionalProperties: s.json() },
  );
