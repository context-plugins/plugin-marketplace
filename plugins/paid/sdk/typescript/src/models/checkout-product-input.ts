import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { checkoutPlanInputSchema, type CheckoutPlanInput } from "./checkout-plan-input.js";

export type CheckoutProductInput = {
  id: string;
  /** Select specific plans within this product. Omit to offer all of the product's plans. */
  plans?: CheckoutPlanInput[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const checkoutProductInputSchema: Schema<CheckoutProductInput> = s.object<CheckoutProductInput>(
  {
    id: s.string(),
    plans: s.optional(s.array(s.lazy(() => checkoutPlanInputSchema))),
  },
  { additionalProperties: s.json() },
);
