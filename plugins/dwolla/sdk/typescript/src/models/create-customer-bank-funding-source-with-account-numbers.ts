import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bankAccountType1Schema, type BankAccountType1 } from "./bank-account-type1.js";
import { channel1Schema, type Channel1 } from "./channel1.js";
import { links5Schema, type Links5 } from "./links5.js";

/**
 * Schema for creating a basic bank funding source using routing and account numbers. This is the
 * traditional method of adding a bank account.
 */
export type CreateCustomerBankFundingSourceWithAccountNumbers = {
  /** A bank routing number that identifies a bank or credit union in the U.S. */
  routingNumber: string;
  /** The bank account number */
  accountNumber: string;
  /** Type of bank account */
  bankAccountType: BankAccountType1;
  /** Arbitrary nickname for the funding source. Must be 50 characters or less. */
  name: string;
  /** Use when creating an unverified bank account. */
  verified?: boolean;
  /**
   * An array containing a list of processing channels. ACH is the default processing channel for
   * bank transfers.
   */
  channels?: Channel1[];
  links?: Links5;
};

export const createCustomerBankFundingSourceWithAccountNumbersSchema: Schema<CreateCustomerBankFundingSourceWithAccountNumbers> =
  s.object<CreateCustomerBankFundingSourceWithAccountNumbers>({
    routingNumber: s.string(),
    accountNumber: s.string(),
    bankAccountType: bankAccountType1Schema,
    name: s.string(),
    verified: s.optional(s.boolean()),
    channels: s.optional(s.array(s.lazy(() => channel1Schema))),
    links: s.optional(s.lazy(() => links5Schema)),
    _keysMap: {
      links: "_links",
    },
  });
