import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { planRefSchema, type PlanRef } from "./plan-ref.js";

/** The product and plan the customer selected, once checkout completes. Null before completion. */
export type CheckoutSelectedProduct = {
  id: string;
  plan: PlanRef;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const checkoutSelectedProductSchema: Schema<CheckoutSelectedProduct> =
  s.object<CheckoutSelectedProduct>(
    {
      id: s.string(),
      plan: planRefSchema,
    },
    { additionalProperties: s.json() },
  );
