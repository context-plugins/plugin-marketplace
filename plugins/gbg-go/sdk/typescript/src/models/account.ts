import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Account = {
  /** The type of account, e.g. Bank Account, Building Society */
  type: string;
  /** Account number */
  accountNumber: string;
  /** UK sort code */
  sortCode?: string;
  /** US ABA routing number */
  routingNumber?: string;
  /** International Bank Account Number */
  iban?: string;
  /** BIC/SWIFT code */
  bic?: string;
  /** Name on the account */
  accountHolderName?: string;
  /** Name of the financial institution */
  bankName?: string;
  /** Country the address is in. It must be a valid ISO2 or ISO3 country code */
  country?: string;
  /** Account classification, e.g. current, savings */
  accountType?: string;
};

export const accountSchema: Schema<Account> = s.object<Account>({
  type: s.string(),
  accountNumber: s.string(),
  sortCode: s.optional(s.string()),
  routingNumber: s.optional(s.string()),
  iban: s.optional(s.string()),
  bic: s.optional(s.string()),
  accountHolderName: s.optional(s.string()),
  bankName: s.optional(s.string()),
  country: s.optional(s.string()),
  accountType: s.optional(s.string()),
});
