import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  billingExplainerServiceSummaryInternalSchema,
  billingExplainerServiceSummarySchema,
  type BillingExplainerServiceSummary,
} from "./billing-explainer-service-summary.js";

export type BillingExplainerSummary = {
  aws: BillingExplainerServiceSummary;
  doit: BillingExplainerServiceSummary;
  awsWithoutDoit: BillingExplainerServiceSummary;
};

const billingExplainerSummaryProperties: s.Shape<BillingExplainerSummary> = {
  aws: billingExplainerServiceSummaryInternalSchema,
  doit: billingExplainerServiceSummaryInternalSchema,
  awsWithoutDoit: billingExplainerServiceSummaryInternalSchema,
};

export const billingExplainerSummaryInternalSchema: Schema<BillingExplainerSummary> =
  s.object<BillingExplainerSummary>(billingExplainerSummaryProperties);

export const billingExplainerSummarySchema: Schema<BillingExplainerSummary> = s.lazySchema(() =>
  s.object<BillingExplainerSummary>({
    ...billingExplainerSummaryProperties,
    aws: billingExplainerServiceSummarySchema,
    doit: billingExplainerServiceSummarySchema,
    awsWithoutDoit: billingExplainerServiceSummarySchema,
  }),
);
