import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  customerBankAccountResponseDtoSchema,
  type CustomerBankAccountResponseDto,
} from "./customer-bank-account-response-dto.js";

/** Response from a list API request with paging references. */
export type ListResponseDtoCustomerBankAccountResponseDto = {
  nextPage?: string;
  prevPage?: string;
  results?: CustomerBankAccountResponseDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listResponseDtoCustomerBankAccountResponseDtoSchema: Schema<ListResponseDtoCustomerBankAccountResponseDto> =
  s.object<ListResponseDtoCustomerBankAccountResponseDto>(
    {
      nextPage: s.optional(s.string()),
      prevPage: s.optional(s.string()),
      results: s.optional(s.array(s.lazy(() => customerBankAccountResponseDtoSchema))),
    },
    { additionalProperties: s.json() },
  );
