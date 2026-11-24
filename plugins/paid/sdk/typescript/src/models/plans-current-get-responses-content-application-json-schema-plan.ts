import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { planPricingSchema, type PlanPricing } from "./plan-pricing.js";
import {
  plansCurrentGetResponsesContentApplicationJsonSchemaPlanFeaturesItemsSchema,
  type PlansCurrentGetResponsesContentApplicationJsonSchemaPlanFeaturesItems,
} from "./plans-current-get-responses-content-application-json-schema-plan-features-items.js";
import {
  plansCurrentGetResponsesContentApplicationJsonSchemaPlanTypeSchema,
  type PlansCurrentGetResponsesContentApplicationJsonSchemaPlanType,
} from "./plans-current-get-responses-content-application-json-schema-plan-type.js";

/** The plan details, or null if the customer has no active plan */
export type PlansCurrentGetResponsesContentApplicationJsonSchemaPlan = {
  /** The unique identifier of the plan */
  id: string;
  /** The name of the plan */
  name: string;
  /** The description of the plan */
  description?: string | null;
  /** The type of plan */
  type: PlansCurrentGetResponsesContentApplicationJsonSchemaPlanType;
  /**
   * The pricing configuration for a plan. Uses the same PricePoints structure as product pricing.
   */
  pricing: PlanPricing;
  /** The plan group ID this plan belongs to */
  planGroupId: string;
  /** The ID of the next plan in the sequence */
  nextPlanId?: string | null;
  /** The ID of the previous plan in the sequence */
  prevPlanId?: string | null;
  /** The features (product-attribute pairs) included in this plan with usage and limits */
  features: PlansCurrentGetResponsesContentApplicationJsonSchemaPlanFeaturesItems[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const plansCurrentGetResponsesContentApplicationJsonSchemaPlanSchema: Schema<PlansCurrentGetResponsesContentApplicationJsonSchemaPlan> =
  s.object<PlansCurrentGetResponsesContentApplicationJsonSchemaPlan>(
    {
      id: s.string(),
      name: s.string(),
      description: s.optionalNullable(s.string()),
      type: plansCurrentGetResponsesContentApplicationJsonSchemaPlanTypeSchema,
      pricing: planPricingSchema,
      planGroupId: s.string(),
      nextPlanId: s.optionalNullable(s.string()),
      prevPlanId: s.optionalNullable(s.string()),
      features: s.array(
        s.lazy(() => plansCurrentGetResponsesContentApplicationJsonSchemaPlanFeaturesItemsSchema),
      ),
    },
    { additionalProperties: s.json() },
  );
