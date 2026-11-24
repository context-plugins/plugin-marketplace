import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  billingExplainerProviderCostsInternalSchema,
  billingExplainerProviderCostsSchema,
  type BillingExplainerProviderCosts,
} from "./billing-explainer-provider-costs.js";
import {
  billingExplainerSummaryInternalSchema,
  billingExplainerSummarySchema,
  type BillingExplainerSummary,
} from "./billing-explainer-summary.js";

export type BillingExplainer = {
  summary: BillingExplainerSummary;
  service: Record<string, BillingExplainerProviderCosts>;
  account: Record<string, BillingExplainerProviderCosts>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const billingExplainerProperties: s.Shape<BillingExplainer> = {
  summary: billingExplainerSummaryInternalSchema,
  service: s.record(
    s.string(),
    s.lazy(() => billingExplainerProviderCostsInternalSchema),
  ),
  account: s.record(
    s.string(),
    s.lazy(() => billingExplainerProviderCostsInternalSchema),
  ),
};

export const billingExplainerInternalSchema: Schema<BillingExplainer> = s.object<BillingExplainer>(
  billingExplainerProperties,
  { additionalProperties: s.json() },
);

export const billingExplainerSchema: Schema<BillingExplainer> = s.lazySchema(() =>
  s.object<BillingExplainer>(
    {
      ...billingExplainerProperties,
      summary: billingExplainerSummarySchema,
      service: s.record(
        s.string(),
        s.lazy(() => billingExplainerProviderCostsSchema),
      ),
      account: s.record(
        s.string(),
        s.lazy(() => billingExplainerProviderCostsSchema),
      ),
    },
    { additionalProperties: s.json() },
  ),
);
