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

export type EntityInvoiceExplainer = {
  summary: BillingExplainerSummary;
  service: Record<string, BillingExplainerProviderCosts>;
  account: Record<string, BillingExplainerProviderCosts>;
  customerId: string;
  billingProfileId: string;
  invoiceNumber: string;
  invoiceMonth: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const entityInvoiceExplainerProperties: s.Shape<EntityInvoiceExplainer> = {
  summary: billingExplainerSummaryInternalSchema,
  service: s.record(
    s.string(),
    s.lazy(() => billingExplainerProviderCostsInternalSchema),
  ),
  account: s.record(
    s.string(),
    s.lazy(() => billingExplainerProviderCostsInternalSchema),
  ),
  customerId: s.string(),
  billingProfileId: s.string(),
  invoiceNumber: s.string(),
  invoiceMonth: s.string(),
};

export const entityInvoiceExplainerInternalSchema: Schema<EntityInvoiceExplainer> =
  s.object<EntityInvoiceExplainer>(entityInvoiceExplainerProperties, { additionalProperties: s.json() });

export const entityInvoiceExplainerSchema: Schema<EntityInvoiceExplainer> = s.lazySchema(() =>
  s.object<EntityInvoiceExplainer>(
    {
      ...entityInvoiceExplainerProperties,
      summary: billingExplainerSummarySchema,
      service: s.record(
        s.string(),
        s.lazy(() => billingExplainerProviderCostsSchema),
      ),
      account: s.record(
        s.string(),
        s.lazy(() => billingExplainerProviderCostsSchema),
      ),
      invoiceMonth: s.string().check(s.pattern("^\\d{4}-(0[1-9]|1[0-2])$")),
    },
    { additionalProperties: s.json() },
  ),
);
