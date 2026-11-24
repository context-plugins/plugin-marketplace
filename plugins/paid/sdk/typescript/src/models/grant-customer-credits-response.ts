import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { creditGrantCurrencySchema, type CreditGrantCurrency } from "./credit-grant-currency.js";
import { creditGrantCustomerSchema, type CreditGrantCustomer } from "./credit-grant-customer.js";
import { creditGrantResultSchema, type CreditGrantResult } from "./credit-grant-result.js";

export type GrantCustomerCreditsResponse = {
  /** True when this request created a new grant. */
  created: boolean;
  customer: CreditGrantCustomer;
  creditCurrency: CreditGrantCurrency;
  grant: CreditGrantResult;
  createdAt: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const grantCustomerCreditsResponseSchema: Schema<GrantCustomerCreditsResponse> =
  s.object<GrantCustomerCreditsResponse>(
    {
      created: s.boolean(),
      customer: creditGrantCustomerSchema,
      creditCurrency: creditGrantCurrencySchema,
      grant: creditGrantResultSchema,
      createdAt: s.dateTime(),
    },
    { additionalProperties: s.json() },
  );
