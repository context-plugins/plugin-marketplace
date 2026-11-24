import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { budgetMemberResponseDtoSchema, type BudgetMemberResponseDto } from "./budget-member-response-dto.js";

/** Response from a list API request with paging references. */
export type PaginationResponseDtoBudgetMemberResponseDto = {
  /** Next page token */
  nextPage?: string;
  /** Previous page token */
  prevPage?: string;
  /** Results */
  results?: BudgetMemberResponseDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const paginationResponseDtoBudgetMemberResponseDtoSchema: Schema<PaginationResponseDtoBudgetMemberResponseDto> =
  s.object<PaginationResponseDtoBudgetMemberResponseDto>(
    {
      nextPage: s.optional(s.string()),
      prevPage: s.optional(s.string()),
      results: s.optional(s.array(s.lazy(() => budgetMemberResponseDtoSchema))),
    },
    { additionalProperties: s.json() },
  );
