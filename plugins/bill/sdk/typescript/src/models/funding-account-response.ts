import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  fundingAccountTypeResponseSchema,
  type FundingAccountTypeResponse,
} from "./funding-account-type-response.js";

/** Funding account details in Payments API. */
export type FundingAccountResponse = {
  type: FundingAccountTypeResponse;
  /**
   * BILL-generated ID of the selected payment funding type. For the `WALLET` type, the `id` is not
   * required.
   */
  id?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const fundingAccountResponseSchema: Schema<FundingAccountResponse> = s.object<FundingAccountResponse>(
  {
    type: fundingAccountTypeResponseSchema,
    id: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
