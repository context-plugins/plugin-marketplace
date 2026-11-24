import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { entity1RazorpayPlansApiSchema, type Entity1RazorpayPlansApi } from "./entity1-razorpay-plans-api.js";

/** The item (price, currency, name) billed each cycle. */
export type Item2 = {
  /** Item ID. Prefix: item_ */
  id?: string;
  entity?: Entity1RazorpayPlansApi;
  /** Whether the item is active and available for use in new invoices. */
  active?: boolean;
  /** Item price in paise (smallest INR unit). */
  amount?: number;
  /** Per-unit price in paise. */
  unitAmount?: number;
  /** @default "INR" */
  currency?: string;
  /** Display name of the item. */
  name?: string;
  description?: string;
  createdAt?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const item2Schema: Schema<Item2> = s.object<Item2>(
  {
    id: s.optional(s.string()),
    entity: s.optional(s.lazy(() => entity1RazorpayPlansApiSchema)),
    active: s.optional(s.boolean()),
    amount: s.optional(s.int()),
    unitAmount: s.optional(s.int()),
    currency: s.defaulted(s.string(), "INR"),
    name: s.optional(s.string()),
    description: s.optional(s.string()),
    createdAt: s.optional(s.int()),
    _keysMap: {
      unitAmount: "unit_amount",
      createdAt: "created_at",
    },
  },
  { additionalProperties: s.json() },
);
