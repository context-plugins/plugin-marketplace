import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { openRouterPricingTierSchema, type OpenRouterPricingTier } from "../open-router-pricing-tier.js";

/** Token prices in USD per token as strings. */
export type Pricing = OpenRouterPricingTier | OpenRouterPricingTier[];

export const pricingSchema: Schema<Pricing> = s.of<Pricing>(
  s.union([s.lazy(() => openRouterPricingTierSchema), s.array(s.lazy(() => openRouterPricingTierSchema))]),
);
