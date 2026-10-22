import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bankAccountType2Schema, type BankAccountType2 } from "./bank-account-type2.js";
import { links7Schema, type Links7 } from "./links7.js";

/**
 * Schema for creating a funding source using an exchange resource. This method is used when the
 * bank account information is obtained via Instant Account Verification (IAV) through an exchange
 * partner (like Plaid, MX, or Finicity).
 */
export type CreateCustomerExchangeFundingSource = {
  links: Links7;
  /** Type of bank account */
  bankAccountType: BankAccountType2;
  /** Arbitrary nickname for the funding source. Must be 50 characters or less. */
  name: string;
};

export const createCustomerExchangeFundingSourceSchema: Schema<CreateCustomerExchangeFundingSource> =
  s.object<CreateCustomerExchangeFundingSource>({
    links: links7Schema,
    bankAccountType: bankAccountType2Schema,
    name: s.string(),
    _keysMap: {
      links: "_links",
    },
  });
