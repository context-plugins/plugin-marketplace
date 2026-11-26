import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  receivableFundingAccountTypeRequestDtoSchema,
  type ReceivableFundingAccountTypeRequestDto,
} from "./receivable-funding-account-type-request-dto.js";

/** Funding Account object. */
export type FundingAccountRequestDto = {
  /**
   * BILL-generated ID of the customer funding account. For a customer bank account, the value
   * begins with `cba`.
   */
  id: string;
  type: ReceivableFundingAccountTypeRequestDto;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const fundingAccountRequestDtoSchema: Schema<FundingAccountRequestDto> =
  s.object<FundingAccountRequestDto>(
    {
      id: s.string(),
      type: receivableFundingAccountTypeRequestDtoSchema,
    },
    { additionalProperties: s.json() },
  );
