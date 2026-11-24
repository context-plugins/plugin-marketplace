import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  billingExplainerMoneyInternalSchema,
  billingExplainerMoneySchema,
  type BillingExplainerMoney,
} from "./billing-explainer-money.js";

export type BillingExplainerCostLineItem = {
  costType: string;
  /** Monetary value represented as a decimal string and an ISO 4217 currency code. */
  cost: BillingExplainerMoney;
};

const billingExplainerCostLineItemProperties: s.Shape<BillingExplainerCostLineItem> = {
  costType: s.string(),
  cost: billingExplainerMoneyInternalSchema,
};

export const billingExplainerCostLineItemInternalSchema: Schema<BillingExplainerCostLineItem> =
  s.object<BillingExplainerCostLineItem>(billingExplainerCostLineItemProperties);

export const billingExplainerCostLineItemSchema: Schema<BillingExplainerCostLineItem> = s.lazySchema(() =>
  s.object<BillingExplainerCostLineItem>({
    ...billingExplainerCostLineItemProperties,
    cost: billingExplainerMoneySchema,
  }),
);
