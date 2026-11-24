import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { entityRazorpayPlansApiSchema, type EntityRazorpayPlansApi } from "./entity-razorpay-plans-api.js";
import { item2Schema, type Item2 } from "./item2.js";
import { periodSchema, type Period } from "./period.js";

/**
 * A billing plan defining the recurring charge amount and frequency. Reusable across multiple
 * subscriptions.
 */
export type Plan = {
  /** Plan ID. Prefix: plan_ */
  id?: string;
  entity?: EntityRazorpayPlansApi;
  /** Number of periods between charges. For daily period, minimum interval is 7. */
  interval?: number;
  /** Billing frequency unit. daily requires interval ≥ 7. */
  period?: Period;
  /** The item (price, currency, name) billed each cycle. */
  item?: Item2;
  /**
   * Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not
   * exceed 256 characters.
   */
  notes?: Record<string, string>;
  createdAt?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const planProperties: s.Shape<Plan> = {
  id: s.optional(s.string()),
  entity: s.optional(s.lazy(() => entityRazorpayPlansApiSchema)),
  interval: s.optional(s.int()),
  period: s.optional(s.lazy(() => periodSchema)),
  item: s.optional(s.lazy(() => item2Schema)),
  notes: s.optional(s.record(s.string(), s.string())),
  createdAt: s.optional(s.int()),
  _keysMap: {
    createdAt: "created_at",
  },
};

export const planInternalSchema: Schema<Plan> = s.object<Plan>(planProperties, {
  additionalProperties: s.json(),
});

export const planSchema: Schema<Plan> = s.lazySchema(() =>
  s.object<Plan>(
    {
      ...planProperties,
      notes: s.optional(s.record(s.string(), s.string()).check(s.maxProperties(15))),
    },
    { additionalProperties: s.json() },
  ),
);
