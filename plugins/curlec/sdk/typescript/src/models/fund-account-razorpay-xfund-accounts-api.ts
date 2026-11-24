import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  accountTypeRazorpayXFundAccountsApiSchema,
  type AccountTypeRazorpayXFundAccountsApi,
} from "./account-type-razorpay-xfund-accounts-api.js";
import {
  bankAccountRazorpayXFundAccountsApiSchema,
  type BankAccountRazorpayXFundAccountsApi,
} from "./bank-account-razorpay-xfund-accounts-api.js";
import { cardSchema, type Card } from "./card.js";
import {
  entityRazorpayXFundAccountsApiSchema,
  type EntityRazorpayXFundAccountsApi,
} from "./entity-razorpay-xfund-accounts-api.js";
import {
  vpaRazorpayXFundAccountsApiSchema,
  type VpaRazorpayXFundAccountsApi,
} from "./vpa-razorpay-xfund-accounts-api.js";
import { walletInternalSchema, walletSchema, type Wallet } from "./wallet.js";

/** Payout destination linked to a Contact. Immutable after creation. */
export type FundAccountRazorpayXFundAccountsApi = {
  /** Fund account ID (fa_*) */
  id?: string;
  entity?: EntityRazorpayXFundAccountsApi;
  contactId?: string;
  accountType?: AccountTypeRazorpayXFundAccountsApi;
  active?: boolean;
  batchId?: string;
  bankAccount?: BankAccountRazorpayXFundAccountsApi;
  vpa?: VpaRazorpayXFundAccountsApi;
  card?: Card;
  createdAt?: number;
  /** Amazon Pay wallet details. Required when account_type=wallet. */
  wallet?: Wallet;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const fundAccountRazorpayXFundAccountsApiProperties: s.Shape<FundAccountRazorpayXFundAccountsApi> = {
  id: s.optional(s.string()),
  entity: s.optional(s.lazy(() => entityRazorpayXFundAccountsApiSchema)),
  contactId: s.optional(s.string()),
  accountType: s.optional(s.lazy(() => accountTypeRazorpayXFundAccountsApiSchema)),
  active: s.optional(s.boolean()),
  batchId: s.optional(s.string()),
  bankAccount: s.optional(s.lazy(() => bankAccountRazorpayXFundAccountsApiSchema)),
  vpa: s.optional(s.lazy(() => vpaRazorpayXFundAccountsApiSchema)),
  card: s.optional(s.lazy(() => cardSchema)),
  createdAt: s.optional(s.int()),
  wallet: s.optional(s.lazy(() => walletInternalSchema)),
  _keysMap: {
    contactId: "contact_id",
    accountType: "account_type",
    batchId: "batch_id",
    bankAccount: "bank_account",
    createdAt: "created_at",
  },
};

export const fundAccountRazorpayXFundAccountsApiInternalSchema: Schema<FundAccountRazorpayXFundAccountsApi> =
  s.object<FundAccountRazorpayXFundAccountsApi>(fundAccountRazorpayXFundAccountsApiProperties, {
    additionalProperties: s.json(),
  });

export const fundAccountRazorpayXFundAccountsApiSchema: Schema<FundAccountRazorpayXFundAccountsApi> =
  s.lazySchema(() =>
    s.object<FundAccountRazorpayXFundAccountsApi>(
      {
        ...fundAccountRazorpayXFundAccountsApiProperties,
        wallet: s.optional(s.lazy(() => walletSchema)),
      },
      { additionalProperties: s.json() },
    ),
  );
