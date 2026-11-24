import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  accountTypeRazorpayXFundAccountsApiSchema,
  type AccountTypeRazorpayXFundAccountsApi,
} from "./account-type-razorpay-xfund-accounts-api.js";
import { bankAccount1Schema, type BankAccount1 } from "./bank-account1.js";
import { card1Schema, type Card1 } from "./card1.js";
import { vpa1Schema, type Vpa1 } from "./vpa1.js";
import { wallet1InternalSchema, wallet1Schema, type Wallet1 } from "./wallet1.js";

export type FundAccountsRequest = {
  contactId: string;
  accountType: AccountTypeRazorpayXFundAccountsApi;
  bankAccount?: BankAccount1;
  vpa?: Vpa1;
  /** Requires PCI DSS compliance */
  card?: Card1;
  /** Required when account_type=wallet (Amazon Pay only) */
  wallet?: Wallet1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const fundAccountsRequestProperties: s.Shape<FundAccountsRequest> = {
  contactId: s.string(),
  accountType: accountTypeRazorpayXFundAccountsApiSchema,
  bankAccount: s.optional(s.lazy(() => bankAccount1Schema)),
  vpa: s.optional(s.lazy(() => vpa1Schema)),
  card: s.optional(s.lazy(() => card1Schema)),
  wallet: s.optional(s.lazy(() => wallet1InternalSchema)),
  _keysMap: {
    contactId: "contact_id",
    accountType: "account_type",
    bankAccount: "bank_account",
  },
};

export const fundAccountsRequestInternalSchema: Schema<FundAccountsRequest> = s.object<FundAccountsRequest>(
  fundAccountsRequestProperties,
  { additionalProperties: s.json() },
);

export const fundAccountsRequestSchema: Schema<FundAccountsRequest> = s.lazySchema(() =>
  s.object<FundAccountsRequest>(
    {
      ...fundAccountsRequestProperties,
      wallet: s.optional(s.lazy(() => wallet1Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
