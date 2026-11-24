import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  receivableFundingAccountTypeResponseSchema,
  type ReceivableFundingAccountTypeResponse,
} from "./receivable-funding-account-type-response.js";

export type FundingAccount3 = {
  /** BILL-generated ID of the customer funding account */
  id?: string;
  type?: ReceivableFundingAccountTypeResponse;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const fundingAccount3Schema: Schema<FundingAccount3> = s.object<FundingAccount3>(
  {
    id: s.optional(s.string()),
    type: s.optional(s.lazy(() => receivableFundingAccountTypeResponseSchema)),
  },
  { additionalProperties: s.json() },
);
