import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { customerNotify2Schema, type CustomerNotify2 } from "./customer-notify2.js";
import { scheduleChangeAtSchema, type ScheduleChangeAt } from "./schedule-change-at.js";

export type SubscriptionsRequest1 = {
  /** New plan ID to switch to. */
  planId?: string;
  quantity?: number;
  /** Override remaining billing cycles. */
  remainingCount?: number;
  /**
   * When changes take effect. 'now' starts a new cycle immediately; 'cycle_end' defers to end of
   * current cycle.
   */
  scheduleChangeAt?: ScheduleChangeAt;
  customerNotify?: CustomerNotify2;
  /**
   * Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not
   * exceed 256 characters.
   */
  notes?: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const subscriptionsRequest1Properties: s.Shape<SubscriptionsRequest1> = {
  planId: s.optional(s.string()),
  quantity: s.optional(s.int()),
  remainingCount: s.optional(s.int()),
  scheduleChangeAt: s.optional(s.lazy(() => scheduleChangeAtSchema)),
  customerNotify: s.optional(s.lazy(() => customerNotify2Schema)),
  notes: s.optional(s.record(s.string(), s.string())),
  _keysMap: {
    planId: "plan_id",
    remainingCount: "remaining_count",
    scheduleChangeAt: "schedule_change_at",
    customerNotify: "customer_notify",
  },
};

export const subscriptionsRequest1InternalSchema: Schema<SubscriptionsRequest1> =
  s.object<SubscriptionsRequest1>(subscriptionsRequest1Properties, { additionalProperties: s.json() });

export const subscriptionsRequest1Schema: Schema<SubscriptionsRequest1> = s.lazySchema(() =>
  s.object<SubscriptionsRequest1>(
    {
      ...subscriptionsRequest1Properties,
      notes: s.optional(s.record(s.string(), s.string()).check(s.maxProperties(15))),
    },
    { additionalProperties: s.json() },
  ),
);
