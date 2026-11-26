import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { planTermItemNameSchema, type PlanTermItemName } from "./plan-term-item-name.js";

/** Plan Term. */
export type PlanTerm = {
  /** Plan charge type */
  type?: string;
  name?: PlanTermItemName;
  /** Plan charge tier */
  tier?: number;
  /** Quantity for the plan charge */
  quantity?: number;
  /** Plan charge */
  price?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const planTermSchema: Schema<PlanTerm> = s.object<PlanTerm>(
  {
    type: s.optional(s.string()),
    name: s.optional(s.lazy(() => planTermItemNameSchema)),
    tier: s.optional(s.float64()),
    quantity: s.optional(s.float64()),
    price: s.optional(s.float64()),
  },
  { additionalProperties: s.json() },
);
