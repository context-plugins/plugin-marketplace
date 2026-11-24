import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CheckoutPlanInput = {
  /**
   * Plan identifier, as returned by the list plans endpoint. Selects a specific plan within the
   * product.
   */
  id: string;
  /** Override the feature bullet points shown for this plan on the hosted checkout page. */
  features?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const checkoutPlanInputSchema: Schema<CheckoutPlanInput> = s.object<CheckoutPlanInput>(
  {
    id: s.string(),
    features: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
