import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { changeScheduledAtSchema, type ChangeScheduledAt } from "./change-scheduled-at.js";
import { customerNotifySchema, type CustomerNotify } from "./customer-notify.js";
import {
  entityRazorpaySubscriptionsApiSchema,
  type EntityRazorpaySubscriptionsApi,
} from "./entity-razorpay-subscriptions-api.js";
import {
  statusRazorpaySubscriptionsApiSchema,
  type StatusRazorpaySubscriptionsApi,
} from "./status-razorpay-subscriptions-api.js";

/**
 * A recurring billing subscription linking a customer to a plan. Requires customer mandate
 * authorization via short_url before charges can be collected.
 */
export type Subscription = {
  /** Subscription ID. Prefix: sub_ */
  id?: string;
  entity?: EntityRazorpaySubscriptionsApi;
  /** Associated plan ID (plan_*). */
  planId?: string;
  /**
   * Subscription lifecycle status. created→authenticated (mandate
   * authorized)→active→completed/cancelled/expired. pending=charge retry scheduled; halted=multiple
   * failures; paused=temporarily stopped.
   */
  status?: StatusRazorpaySubscriptionsApi;
  /** Unix timestamp of current billing cycle start. */
  currentStart?: number;
  /** Unix timestamp of current billing cycle end. */
  currentEnd?: number;
  /** Unix timestamp when subscription ended (cancelled/completed/expired). */
  endedAt?: number;
  /** Number of plan units billed per cycle. @default 1 */
  quantity?: number;
  /**
   * Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not
   * exceed 256 characters.
   */
  notes?: Record<string, string>;
  /** Unix timestamp of next scheduled charge attempt. */
  chargeAt?: number;
  /** Unix timestamp of first charge. Defaults to subscription creation time. */
  startAt?: number;
  /** Unix timestamp after which no more charges will be attempted. */
  endAt?: number;
  /** Number of mandate authorization attempts. */
  authAttempts?: number;
  /** Total billing cycles. 0 = indefinite. */
  totalCount?: number;
  /** Number of billing cycles successfully charged. */
  paidCount?: number;
  /** Remaining billing cycles. */
  remainingCount?: number;
  /** 1 = Razorpay sends SMS/email notifications to customer on each charge. */
  customerNotify?: CustomerNotify;
  /** Mandate authorization URL. Must be sent to the customer to activate the subscription. */
  shortUrl?: string;
  /** True if a plan/quantity change is scheduled for the next cycle. */
  hasScheduledChanges?: boolean;
  /** When scheduled changes take effect. */
  changeScheduledAt?: ChangeScheduledAt;
  /** Source that created the subscription (e.g., api, dashboard). */
  source?: string;
  /** Offer/coupon applied to the subscription. */
  offerId?: string;
  /** Unix timestamp by which the customer must authorize the mandate. */
  expireBy?: number;
  createdAt?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const subscriptionProperties: s.Shape<Subscription> = {
  id: s.optional(s.string()),
  entity: s.optional(s.lazy(() => entityRazorpaySubscriptionsApiSchema)),
  planId: s.optional(s.string()),
  status: s.optional(s.lazy(() => statusRazorpaySubscriptionsApiSchema)),
  currentStart: s.optional(s.int()),
  currentEnd: s.optional(s.int()),
  endedAt: s.optional(s.int()),
  quantity: s.defaulted(s.int(), 1),
  notes: s.optional(s.record(s.string(), s.string())),
  chargeAt: s.optional(s.int()),
  startAt: s.optional(s.int()),
  endAt: s.optional(s.int()),
  authAttempts: s.optional(s.int()),
  totalCount: s.optional(s.int()),
  paidCount: s.optional(s.int()),
  remainingCount: s.optional(s.int()),
  customerNotify: s.optional(s.lazy(() => customerNotifySchema)),
  shortUrl: s.optional(s.string()),
  hasScheduledChanges: s.optional(s.boolean()),
  changeScheduledAt: s.optional(s.lazy(() => changeScheduledAtSchema)),
  source: s.optional(s.string()),
  offerId: s.optional(s.string()),
  expireBy: s.optional(s.int()),
  createdAt: s.optional(s.int()),
  _keysMap: {
    planId: "plan_id",
    currentStart: "current_start",
    currentEnd: "current_end",
    endedAt: "ended_at",
    chargeAt: "charge_at",
    startAt: "start_at",
    endAt: "end_at",
    authAttempts: "auth_attempts",
    totalCount: "total_count",
    paidCount: "paid_count",
    remainingCount: "remaining_count",
    customerNotify: "customer_notify",
    shortUrl: "short_url",
    hasScheduledChanges: "has_scheduled_changes",
    changeScheduledAt: "change_scheduled_at",
    offerId: "offer_id",
    expireBy: "expire_by",
    createdAt: "created_at",
  },
};

export const subscriptionInternalSchema: Schema<Subscription> = s.object<Subscription>(
  subscriptionProperties,
  { additionalProperties: s.json() },
);

export const subscriptionSchema: Schema<Subscription> = s.lazySchema(() =>
  s.object<Subscription>(
    {
      ...subscriptionProperties,
      notes: s.optional(s.record(s.string(), s.string()).check(s.maxProperties(15))),
    },
    { additionalProperties: s.json() },
  ),
);
