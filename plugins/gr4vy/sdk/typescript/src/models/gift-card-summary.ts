import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Type31, type31Schema } from "./type31.js";
import { balanceErrorCodeSchema, type BalanceErrorCode } from "./unions/balance-error-code.js";
import { balanceRawErrorCodeSchema, type BalanceRawErrorCode } from "./unions/balance-raw-error-code.js";
import {
  balanceRawErrorMessageSchema,
  type BalanceRawErrorMessage,
} from "./unions/balance-raw-error-message.js";
import { balanceSchema, type Balance } from "./unions/balance.js";
import { citLastUsedAtSchema, type CitLastUsedAt } from "./unions/cit-last-used-at.js";
import { currency3Schema, type Currency3 } from "./unions/currency3.js";
import { expirationDateSchema, type ExpirationDate } from "./unions/expiration-date.js";
import { id4Schema, type Id4 } from "./unions/id4.js";
import { lastUsedAt1Schema, type LastUsedAt1 } from "./unions/last-used-at1.js";

export type GiftCardSummary = {
  /** Always `gift-card`. @default Type31.GiftCard */
  type?: Type31;
  /** The ID for the gift card. */
  id?: Id4;
  /** The ID of the merchant account this buyer belongs to. */
  merchantAccountId: string;
  /** The first 6 digits of the full gift card number. */
  bin: string;
  /** The 3 digits after the `bin` of the full gift card number. */
  subBin: string;
  /** The last 4 digits for the gift card. */
  last4: string;
  /** The ISO-4217 currency code that this gift card has a balance for. */
  currency?: Currency3;
  /**
   * The date and time when this gift card expires. This is a full date/time and may be more
   * accurate than the actual expiry date received by the gift card service.
   */
  expirationDate?: ExpirationDate;
  /**
   * The amount remaining on the balance for this gift card according to the gift card service. This
   * may be `null` if the balance could not be fetched.
   */
  balance?: Balance;
  /** If the last balance update failed, this will contain the internal code for this error. */
  balanceErrorCode?: BalanceErrorCode;
  /**
   * If the last balance update failed, this will contain the the raw error code received from the
   * gift card provider.
   */
  balanceRawErrorCode?: BalanceRawErrorCode;
  /**
   * If the last balance update failed, this will contain the the raw error message received from
   * the gift card provider.
   */
  balanceRawErrorMessage?: BalanceRawErrorMessage;
  /** The timestamp when this gift card was last used in a transaction. */
  lastUsedAt?: LastUsedAt1;
  /** The number of times this gift card has been used in transactions. */
  usageCount: number;
  /**
   * The timestamp when this gift card was last used in a transaction for client initiated
   * transactions.
   */
  citLastUsedAt?: CitLastUsedAt;
  /**
   * The number of times this gift card has been used in transactions for client initiated
   * transactions.
   */
  citUsageCount: number;
};

export const giftCardSummarySchema: Schema<GiftCardSummary> = s.object<GiftCardSummary>({
  type: s.defaulted(type31Schema, Type31.GiftCard),
  id: s.optional(s.lazy(() => id4Schema)),
  merchantAccountId: s.string(),
  bin: s.string(),
  subBin: s.string(),
  last4: s.string(),
  currency: s.optional(s.lazy(() => currency3Schema)),
  expirationDate: s.optional(s.lazy(() => expirationDateSchema)),
  balance: s.optional(s.lazy(() => balanceSchema)),
  balanceErrorCode: s.optional(s.lazy(() => balanceErrorCodeSchema)),
  balanceRawErrorCode: s.optional(s.lazy(() => balanceRawErrorCodeSchema)),
  balanceRawErrorMessage: s.optional(s.lazy(() => balanceRawErrorMessageSchema)),
  lastUsedAt: s.optional(s.lazy(() => lastUsedAt1Schema)),
  usageCount: s.int(),
  citLastUsedAt: s.optional(s.lazy(() => citLastUsedAtSchema)),
  citUsageCount: s.int(),
  _keysMap: {
    merchantAccountId: "merchant_account_id",
    subBin: "sub_bin",
    expirationDate: "expiration_date",
    balanceErrorCode: "balance_error_code",
    balanceRawErrorCode: "balance_raw_error_code",
    balanceRawErrorMessage: "balance_raw_error_message",
    lastUsedAt: "last_used_at",
    usageCount: "usage_count",
    citLastUsedAt: "cit_last_used_at",
    citUsageCount: "cit_usage_count",
  },
});
