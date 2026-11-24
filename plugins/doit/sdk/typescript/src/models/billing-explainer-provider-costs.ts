import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  billingExplainerMoneyInternalSchema,
  billingExplainerMoneySchema,
  type BillingExplainerMoney,
} from "./billing-explainer-money.js";

export type BillingExplainerProviderCosts = {
  doit: Record<string, BillingExplainerMoney>;
  aws: Record<string, BillingExplainerMoney>;
};

const billingExplainerProviderCostsProperties: s.Shape<BillingExplainerProviderCosts> = {
  doit: s.record(
    s.string(),
    s.lazy(() => billingExplainerMoneyInternalSchema),
  ),
  aws: s.record(
    s.string(),
    s.lazy(() => billingExplainerMoneyInternalSchema),
  ),
};

export const billingExplainerProviderCostsInternalSchema: Schema<BillingExplainerProviderCosts> =
  s.object<BillingExplainerProviderCosts>(billingExplainerProviderCostsProperties);

export const billingExplainerProviderCostsSchema: Schema<BillingExplainerProviderCosts> = s.lazySchema(() =>
  s.object<BillingExplainerProviderCosts>({
    ...billingExplainerProviderCostsProperties,
    doit: s.record(
      s.string(),
      s.lazy(() => billingExplainerMoneySchema),
    ),
    aws: s.record(
      s.string(),
      s.lazy(() => billingExplainerMoneySchema),
    ),
  }),
);
