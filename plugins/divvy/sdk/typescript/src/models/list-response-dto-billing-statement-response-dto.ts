import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  billingStatementResponseDtoSchema,
  type BillingStatementResponseDto,
} from "./billing-statement-response-dto.js";

/** Response from a list API request with paging references. */
export type ListResponseDtoBillingStatementResponseDto = {
  nextPage?: string;
  prevPage?: string;
  results?: BillingStatementResponseDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listResponseDtoBillingStatementResponseDtoSchema: Schema<ListResponseDtoBillingStatementResponseDto> =
  s.object<ListResponseDtoBillingStatementResponseDto>(
    {
      nextPage: s.optional(s.string()),
      prevPage: s.optional(s.string()),
      results: s.optional(s.array(s.lazy(() => billingStatementResponseDtoSchema))),
    },
    { additionalProperties: s.json() },
  );
