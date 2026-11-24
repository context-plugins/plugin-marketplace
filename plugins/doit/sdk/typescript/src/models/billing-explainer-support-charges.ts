import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  billingExplainerMoneyInternalSchema,
  billingExplainerMoneySchema,
  type BillingExplainerMoney,
} from "./billing-explainer-money.js";
import {
  billingExplainerSupportDetailInternalSchema,
  billingExplainerSupportDetailSchema,
  type BillingExplainerSupportDetail,
} from "./billing-explainer-support-detail.js";

export type BillingExplainerSupportCharges = {
  /** Monetary value represented as a decimal string and an ISO 4217 currency code. */
  cost: BillingExplainerMoney;
  details: BillingExplainerSupportDetail[];
};

const billingExplainerSupportChargesProperties: s.Shape<BillingExplainerSupportCharges> = {
  cost: billingExplainerMoneyInternalSchema,
  details: s.array(s.lazy(() => billingExplainerSupportDetailInternalSchema)),
};

export const billingExplainerSupportChargesInternalSchema: Schema<BillingExplainerSupportCharges> =
  s.object<BillingExplainerSupportCharges>(billingExplainerSupportChargesProperties);

export const billingExplainerSupportChargesSchema: Schema<BillingExplainerSupportCharges> = s.lazySchema(() =>
  s.object<BillingExplainerSupportCharges>({
    ...billingExplainerSupportChargesProperties,
    cost: billingExplainerMoneySchema,
    details: s.array(s.lazy(() => billingExplainerSupportDetailSchema)),
  }),
);
