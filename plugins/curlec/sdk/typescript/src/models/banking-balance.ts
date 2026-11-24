import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  accountTypeRazorpayXBankingBalancesApiSchema,
  type AccountTypeRazorpayXBankingBalancesApi,
} from "./account-type-razorpay-xbanking-balances-api.js";
import {
  entityRazorpayXBankingBalancesApiSchema,
  type EntityRazorpayXBankingBalancesApi,
} from "./entity-razorpay-xbanking-balances-api.js";

/** RazorpayX banking account balance. */
export type BankingBalance = {
  entity?: EntityRazorpayXBankingBalancesApi;
  currency?: string;
  accountNumber?: string;
  accountType?: AccountTypeRazorpayXBankingBalancesApi;
  bankName?: string;
  /** First 4 characters of IFSC */
  bankCode?: string;
  /** Total balance in paise */
  amount?: number;
  /** Available balance in paise */
  availableAmount?: number;
  /** Unix timestamp of last refresh */
  refreshedAt?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const bankingBalanceSchema: Schema<BankingBalance> = s.object<BankingBalance>(
  {
    entity: s.optional(s.lazy(() => entityRazorpayXBankingBalancesApiSchema)),
    currency: s.optional(s.string()),
    accountNumber: s.optional(s.string()),
    accountType: s.optional(s.lazy(() => accountTypeRazorpayXBankingBalancesApiSchema)),
    bankName: s.optional(s.string()),
    bankCode: s.optional(s.string()),
    amount: s.optional(s.int()),
    availableAmount: s.optional(s.int()),
    refreshedAt: s.optional(s.int()),
    _keysMap: {
      accountNumber: "account_number",
      accountType: "account_type",
      bankName: "bank_name",
      bankCode: "bank_code",
      availableAmount: "available_amount",
      refreshedAt: "refreshed_at",
    },
  },
  { additionalProperties: s.json() },
);
