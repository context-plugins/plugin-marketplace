import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { entity1RazorpayPlansApiSchema, type Entity1RazorpayPlansApi } from "./entity1-razorpay-plans-api.js";

/** A reusable catalog item used in invoice line items. */
export type ItemRazorpayPlansApi = {
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

export const itemRazorpayPlansApiSchema: Schema<ItemRazorpayPlansApi> = s.object<ItemRazorpayPlansApi>(
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
