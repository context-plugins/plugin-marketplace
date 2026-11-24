import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  billingExplainerMoneyInternalSchema,
  billingExplainerMoneySchema,
  type BillingExplainerMoney,
} from "./billing-explainer-money.js";
import {
  billingExplainerPayerInternalSchema,
  billingExplainerPayerSchema,
  type BillingExplainerPayer,
} from "./billing-explainer-payer.js";

export type BillingExplainerCustomer = {
  customerId: string;
  invoiceMonth: string;
  updateTime: Date;
  payers: Record<string, BillingExplainerPayer>;
  /** Monetary value represented as a decimal string and an ISO 4217 currency code. */
  doitCredits: BillingExplainerMoney;
  /** Monetary value represented as a decimal string and an ISO 4217 currency code. */
  invoiceAdjustments: BillingExplainerMoney;
};

const billingExplainerCustomerProperties: s.Shape<BillingExplainerCustomer> = {
  customerId: s.string(),
  invoiceMonth: s.string(),
  updateTime: s.dateTime(),
  payers: s.record(
    s.string(),
    s.lazy(() => billingExplainerPayerInternalSchema),
  ),
  doitCredits: billingExplainerMoneyInternalSchema,
  invoiceAdjustments: billingExplainerMoneyInternalSchema,
};

export const billingExplainerCustomerInternalSchema: Schema<BillingExplainerCustomer> =
  s.object<BillingExplainerCustomer>(billingExplainerCustomerProperties);

export const billingExplainerCustomerSchema: Schema<BillingExplainerCustomer> = s.lazySchema(() =>
  s.object<BillingExplainerCustomer>({
    ...billingExplainerCustomerProperties,
    invoiceMonth: s.string().check(s.pattern("^\\d{4}-(0[1-9]|1[0-2])$")),
    payers: s.record(
      s.string(),
      s.lazy(() => billingExplainerPayerSchema),
    ),
    doitCredits: billingExplainerMoneySchema,
    invoiceAdjustments: billingExplainerMoneySchema,
  }),
);
