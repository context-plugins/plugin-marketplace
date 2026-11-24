import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { checkoutPlanSchema, type CheckoutPlan } from "./checkout-plan.js";

export type CheckoutProduct = {
  id: string;
  /**
   * Plans selected within this product. Absent when the product is offered with all of its plans
   * and none are individually configured.
   */
  plans?: CheckoutPlan[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const checkoutProductSchema: Schema<CheckoutProduct> = s.object<CheckoutProduct>(
  {
    id: s.string(),
    plans: s.optional(s.array(s.lazy(() => checkoutPlanSchema))),
  },
  { additionalProperties: s.json() },
);
