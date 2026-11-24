import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { planPlanProductsItemsSchema, type PlanPlanProductsItems } from "./plan-plan-products-items.js";
import { planPricingSchema, type PlanPricing } from "./plan-pricing.js";
import { planTypeSchema, type PlanType } from "./plan-type.js";

/** A plan containing products and their attributes */
export type Plan = {
  /** The unique identifier of the plan */
  id: string;
  /** The organization ID that owns this plan */
  organizationId: string;
  /** The plan group ID this plan belongs to */
  planGroupId: string;
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
  /** The ID of the next plan in the sequence */
  nextPlanId?: string | null;
  /** The ID of the previous plan in the sequence */
  prevPlanId?: string | null;
  /** When the plan was created */
  createdAt: Date;
  /** When the plan was last updated */
  updatedAt: Date;
  /** The products included in this plan */
  planProducts?: PlanPlanProductsItems[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const planSchema: Schema<Plan> = s.object<Plan>(
  {
    id: s.string(),
    organizationId: s.string(),
    planGroupId: s.string(),
    name: s.string(),
    description: s.optionalNullable(s.string()),
    type: planTypeSchema,
    pricing: planPricingSchema,
    nextPlanId: s.optionalNullable(s.string()),
    prevPlanId: s.optionalNullable(s.string()),
    createdAt: s.dateTime(),
    updatedAt: s.dateTime(),
    planProducts: s.optional(s.array(s.lazy(() => planPlanProductsItemsSchema))),
  },
  { additionalProperties: s.json() },
);
