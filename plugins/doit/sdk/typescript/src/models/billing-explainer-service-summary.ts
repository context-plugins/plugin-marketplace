import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  billingExplainerCostLineItemInternalSchema,
  billingExplainerCostLineItemSchema,
  type BillingExplainerCostLineItem,
} from "./billing-explainer-cost-line-item.js";
import {
  billingExplainerMoneyInternalSchema,
  billingExplainerMoneySchema,
  type BillingExplainerMoney,
} from "./billing-explainer-money.js";
import {
  billingExplainerSupportChargesInternalSchema,
  billingExplainerSupportChargesSchema,
  type BillingExplainerSupportCharges,
} from "./billing-explainer-support-charges.js";

export type BillingExplainerServiceSummary = {
  serviceCharges: BillingExplainerCostLineItem[];
  marketplaceCharges: BillingExplainerCostLineItem[];
  discounts: BillingExplainerCostLineItem[];
  tax: BillingExplainerCostLineItem[];
  supportCharges: BillingExplainerSupportCharges;
  credits: BillingExplainerCostLineItem[];
  savings: BillingExplainerCostLineItem[];
  otherCharges: BillingExplainerCostLineItem[];
  refunds: BillingExplainerCostLineItem[];
  /** Monetary value represented as a decimal string and an ISO 4217 currency code. */
  total: BillingExplainerMoney;
};

const billingExplainerServiceSummaryProperties: s.Shape<BillingExplainerServiceSummary> = {
  serviceCharges: s.array(s.lazy(() => billingExplainerCostLineItemInternalSchema)),
  marketplaceCharges: s.array(s.lazy(() => billingExplainerCostLineItemInternalSchema)),
  discounts: s.array(s.lazy(() => billingExplainerCostLineItemInternalSchema)),
  tax: s.array(s.lazy(() => billingExplainerCostLineItemInternalSchema)),
  supportCharges: billingExplainerSupportChargesInternalSchema,
  credits: s.array(s.lazy(() => billingExplainerCostLineItemInternalSchema)),
  savings: s.array(s.lazy(() => billingExplainerCostLineItemInternalSchema)),
  otherCharges: s.array(s.lazy(() => billingExplainerCostLineItemInternalSchema)),
  refunds: s.array(s.lazy(() => billingExplainerCostLineItemInternalSchema)),
  total: billingExplainerMoneyInternalSchema,
};

export const billingExplainerServiceSummaryInternalSchema: Schema<BillingExplainerServiceSummary> =
  s.object<BillingExplainerServiceSummary>(billingExplainerServiceSummaryProperties);

export const billingExplainerServiceSummarySchema: Schema<BillingExplainerServiceSummary> = s.lazySchema(() =>
  s.object<BillingExplainerServiceSummary>({
    ...billingExplainerServiceSummaryProperties,
    serviceCharges: s.array(s.lazy(() => billingExplainerCostLineItemSchema)),
    marketplaceCharges: s.array(s.lazy(() => billingExplainerCostLineItemSchema)),
    discounts: s.array(s.lazy(() => billingExplainerCostLineItemSchema)),
    tax: s.array(s.lazy(() => billingExplainerCostLineItemSchema)),
    supportCharges: billingExplainerSupportChargesSchema,
    credits: s.array(s.lazy(() => billingExplainerCostLineItemSchema)),
    savings: s.array(s.lazy(() => billingExplainerCostLineItemSchema)),
    otherCharges: s.array(s.lazy(() => billingExplainerCostLineItemSchema)),
    refunds: s.array(s.lazy(() => billingExplainerCostLineItemSchema)),
    total: billingExplainerMoneySchema,
  }),
);
