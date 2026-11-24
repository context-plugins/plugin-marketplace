import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Monetary value represented as a decimal string and an ISO 4217 currency code. */
export type BillingExplainerMoney = {
  /** Decimal amount serialized at the currency's minor-unit precision. */
  amount: string;
  /** ISO 4217 three-letter uppercase currency code. */
  currency: string;
};

const billingExplainerMoneyProperties: s.Shape<BillingExplainerMoney> = {
  amount: s.string(),
  currency: s.string(),
};

export const billingExplainerMoneyInternalSchema: Schema<BillingExplainerMoney> =
  s.object<BillingExplainerMoney>(billingExplainerMoneyProperties);

export const billingExplainerMoneySchema: Schema<BillingExplainerMoney> = s.lazySchema(() =>
  s.object<BillingExplainerMoney>({
    ...billingExplainerMoneyProperties,
    amount: s.string().check(s.minLength(1), s.maxLength(30), s.pattern("^-?(0|[1-9][0-9]*)(\\.[0-9]+)?$")),
    currency: s.string().check(s.minLength(3), s.maxLength(3), s.pattern("^[A-Z]{3}$")),
  }),
);
