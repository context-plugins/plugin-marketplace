import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Details about the beneficiary's bank. */
export type BankDetails = {
  /** The country of the bank (ISO 3166-1 alpha-2). */
  country?: string;
  /** The account number or IBAN. */
  accountNumber?: string;
  /** The BIC/SWIFT code of the beneficiary's bank. */
  beneficiaryBankBic?: string;
  /** The routing number (if applicable). */
  routingNumber?: string;
  /** The address of the bank. */
  bankAddress?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const bankDetailsSchema: Schema<BankDetails> = s.object<BankDetails>(
  {
    country: s.optional(s.string()),
    accountNumber: s.optional(s.string()),
    beneficiaryBankBic: s.optional(s.string()),
    routingNumber: s.optional(s.string()),
    bankAddress: s.optional(s.string()),
    _keysMap: {
      beneficiaryBankBic: "beneficiaryBankBIC",
    },
  },
  { additionalProperties: s.json() },
);
