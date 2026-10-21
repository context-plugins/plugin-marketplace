import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amountLocalCurrencySchema, type AmountLocalCurrency } from "./unions/amount-local-currency.js";
import { amountUsdSchema, type AmountUsd } from "./unions/amount-usd.js";
import { currency9Schema, type Currency9 } from "./unions/currency9.js";

export type ForterAntiFraudOptionsDiscountCouponDiscountAmount = {
  /** The discount amount in USD. */
  amountUsd?: AmountUsd;
  /** The discount amount in local currency. */
  amountLocalCurrency?: AmountLocalCurrency;
  /** The currency code for the discount amount. */
  currency?: Currency9;
};

export const forterAntiFraudOptionsDiscountCouponDiscountAmountSchema: Schema<ForterAntiFraudOptionsDiscountCouponDiscountAmount> =
  s.object<ForterAntiFraudOptionsDiscountCouponDiscountAmount>({
    amountUsd: s.optional(s.lazy(() => amountUsdSchema)),
    amountLocalCurrency: s.optional(s.lazy(() => amountLocalCurrencySchema)),
    currency: s.optional(s.lazy(() => currency9Schema)),
    _keysMap: {
      amountUsd: "amount_usd",
      amountLocalCurrency: "amount_local_currency",
    },
  });
