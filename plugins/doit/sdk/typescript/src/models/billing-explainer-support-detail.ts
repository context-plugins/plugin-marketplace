import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  billingExplainerMoneyInternalSchema,
  billingExplainerMoneySchema,
  type BillingExplainerMoney,
} from "./billing-explainer-money.js";

export type BillingExplainerSupportDetail = {
  projectId: string;
  serviceDescription: string;
  description: string;
  /** Monetary value represented as a decimal string and an ISO 4217 currency code. */
  cost: BillingExplainerMoney;
  /** Monetary value represented as a decimal string and an ISO 4217 currency code. */
  baseCost: BillingExplainerMoney;
};

const billingExplainerSupportDetailProperties: s.Shape<BillingExplainerSupportDetail> = {
  projectId: s.string(),
  serviceDescription: s.string(),
  description: s.string(),
  cost: billingExplainerMoneyInternalSchema,
  baseCost: billingExplainerMoneyInternalSchema,
};

export const billingExplainerSupportDetailInternalSchema: Schema<BillingExplainerSupportDetail> =
  s.object<BillingExplainerSupportDetail>(billingExplainerSupportDetailProperties);

export const billingExplainerSupportDetailSchema: Schema<BillingExplainerSupportDetail> = s.lazySchema(() =>
  s.object<BillingExplainerSupportDetail>({
    ...billingExplainerSupportDetailProperties,
    cost: billingExplainerMoneySchema,
    baseCost: billingExplainerMoneySchema,
  }),
);
