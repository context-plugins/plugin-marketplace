import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  receivableFundingAccountTypeResponseSchema,
  type ReceivableFundingAccountTypeResponse,
} from "./receivable-funding-account-type-response.js";

/** Funding Account object. */
export type FundingAccountBillV3ReceivablePaymentsApi = {
  /** BILL-generated ID of the customer funding account */
  id?: string;
  type?: ReceivableFundingAccountTypeResponse;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const fundingAccountBillV3ReceivablePaymentsApiSchema: Schema<FundingAccountBillV3ReceivablePaymentsApi> =
  s.object<FundingAccountBillV3ReceivablePaymentsApi>(
    {
      id: s.optional(s.string()),
      type: s.optional(s.lazy(() => receivableFundingAccountTypeResponseSchema)),
    },
    { additionalProperties: s.json() },
  );
