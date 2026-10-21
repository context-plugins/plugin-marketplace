import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The account holder details and bank account information for the business account. */
export type AccountDetails = {
  /** The name of the account holder. */
  accountHolderName: string;
  /** A name of the account. */
  name?: string;
  /** The currency of the account in ISO 4217 format. */
  currency: string;
  /** The IBAN (International Bank Account Number) of the account. */
  iban: string;
  /** The BIC (Bank Identifier Code) of the account. */
  bic?: string;
};

export const accountDetailsSchema: Schema<AccountDetails> = s.object<AccountDetails>({
  accountHolderName: s.string(),
  name: s.optional(s.string()),
  currency: s.string(),
  iban: s.string(),
  bic: s.optional(s.string()),
});
