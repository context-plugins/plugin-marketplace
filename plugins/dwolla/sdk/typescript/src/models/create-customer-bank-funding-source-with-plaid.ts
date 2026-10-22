import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bankAccountType2Schema, type BankAccountType2 } from "./bank-account-type2.js";
import { channel1Schema, type Channel1 } from "./channel1.js";
import { links5Schema, type Links5 } from "./links5.js";

/** Schema for creating a bank funding source using a Plaid processor token. */
export type CreateCustomerBankFundingSourceWithPlaid = {
  /** A processor token obtained from Plaid for adding and verifying a bank */
  plaidToken: string;
  /** Type of bank account */
  bankAccountType: BankAccountType2;
  /** Arbitrary nickname for the funding source. Must be 50 characters or less. */
  name: string;
  /**
   * An array containing a list of processing channels. ACH is the default processing channel for
   * bank transfers.
   */
  channels?: Channel1[];
  links?: Links5;
};

export const createCustomerBankFundingSourceWithPlaidSchema: Schema<CreateCustomerBankFundingSourceWithPlaid> =
  s.object<CreateCustomerBankFundingSourceWithPlaid>({
    plaidToken: s.string(),
    bankAccountType: bankAccountType2Schema,
    name: s.string(),
    channels: s.optional(s.array(s.lazy(() => channel1Schema))),
    links: s.optional(s.lazy(() => links5Schema)),
    _keysMap: {
      links: "_links",
    },
  });
