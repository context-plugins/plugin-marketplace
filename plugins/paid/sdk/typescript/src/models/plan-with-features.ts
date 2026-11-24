import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { planPricingSchema, type PlanPricing } from "./plan-pricing.js";
import { planTypeSchema, type PlanType } from "./plan-type.js";
import {
  planWithFeaturesFeaturesItemsSchema,
  type PlanWithFeaturesFeaturesItems,
} from "./plan-with-features-features-items.js";

/** A plan with its features (product-attribute pairs) for display */
export type PlanWithFeatures = {
  /** The unique identifier of the plan */
  id: string;
  /** The name of the plan */
  name: string;
  /** The description of the plan */
  description?: string | null;
  /**
   * The type of plan (flat for fixed pricing, usage for usage-based, credit for prepaid credits)
   */
  type: PlanType;
  /**
   * The pricing configuration for a plan. Uses the same PricePoints structure as product pricing.
   */
  pricing: PlanPricing;
  /** When the plan was created */
  createdAt: Date;
  /** When the plan was last updated */
  updatedAt: Date;
  /** The ID of the next plan in the sequence */
  nextPlanId?: string | null;
  /** The ID of the previous plan in the sequence */
  prevPlanId?: string | null;
  /** The features (product-attribute pairs) included in this plan */
  features: PlanWithFeaturesFeaturesItems[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const planWithFeaturesSchema: Schema<PlanWithFeatures> = s.object<PlanWithFeatures>(
  {
    id: s.string(),
    name: s.string(),
    description: s.optionalNullable(s.string()),
    type: planTypeSchema,
    pricing: planPricingSchema,
    createdAt: s.dateTime(),
    updatedAt: s.dateTime(),
    nextPlanId: s.optionalNullable(s.string()),
    prevPlanId: s.optionalNullable(s.string()),
    features: s.array(s.lazy(() => planWithFeaturesFeaturesItemsSchema)),
  },
  { additionalProperties: s.json() },
);
