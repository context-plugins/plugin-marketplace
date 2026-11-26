import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  fundingAccountTypeRequestSchema,
  type FundingAccountTypeRequest,
} from "./funding-account-type-request.js";

/** Funding account details in Payments API. */
export type FundingAccountRequest = {
  type: FundingAccountTypeRequest;
  /**
   * BILL-generated ID of the selected payment funding type. For the `WALLET` type, the `id` is not
   * required.
   */
  id?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const fundingAccountRequestSchema: Schema<FundingAccountRequest> = s.object<FundingAccountRequest>(
  {
    type: fundingAccountTypeRequestSchema,
    id: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
