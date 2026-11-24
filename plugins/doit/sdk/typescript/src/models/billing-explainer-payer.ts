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

export type BillingExplainerPayer = {
  summary: BillingExplainerSummary;
  service: Record<string, BillingExplainerProviderCosts>;
  account: Record<string, BillingExplainerProviderCosts>;
  payerId: string;
  friendlyName: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const billingExplainerPayerProperties: s.Shape<BillingExplainerPayer> = {
  summary: billingExplainerSummaryInternalSchema,
  service: s.record(
    s.string(),
    s.lazy(() => billingExplainerProviderCostsInternalSchema),
  ),
  account: s.record(
    s.string(),
    s.lazy(() => billingExplainerProviderCostsInternalSchema),
  ),
  payerId: s.string(),
  friendlyName: s.string(),
};

export const billingExplainerPayerInternalSchema: Schema<BillingExplainerPayer> =
  s.object<BillingExplainerPayer>(billingExplainerPayerProperties, { additionalProperties: s.json() });

export const billingExplainerPayerSchema: Schema<BillingExplainerPayer> = s.lazySchema(() =>
  s.object<BillingExplainerPayer>(
    {
      ...billingExplainerPayerProperties,
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
