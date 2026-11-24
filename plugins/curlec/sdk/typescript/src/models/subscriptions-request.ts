import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { addonSchema, type Addon } from "./addon.js";
import { customerNotify1Schema, type CustomerNotify1 } from "./customer-notify1.js";
import { notifyInfoSchema, type NotifyInfo } from "./notify-info.js";

export type SubscriptionsRequest = {
  /** Plan ID (plan_*) to subscribe the customer to. */
  planId: string;
  /** Total number of billing cycles. Use 0 for indefinite (no fixed end). */
  totalCount: number;
  /** Number of plan units billed per cycle. @default 1 */
  quantity?: number;
  /** 1 to have Razorpay notify customer via SMS/email on each charge event. */
  customerNotify?: CustomerNotify1;
  /** Unix timestamp for the first charge. Defaults to subscription creation time. */
  startAt?: number;
  /** Unix timestamp deadline for the customer to authorize the mandate. */
  expireBy?: number;
  /** One-time charges added to the first billing cycle only. */
  addons?: Addon[];
  /** Offer/coupon ID to apply to the subscription. */
  offerId?: string;
  /** If provided, Razorpay sends the mandate auth link directly to the customer. */
  notifyInfo?: NotifyInfo;
  /**
   * Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not
   * exceed 256 characters.
   */
  notes?: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const subscriptionsRequestProperties: s.Shape<SubscriptionsRequest> = {
  planId: s.string(),
  totalCount: s.int(),
  quantity: s.defaulted(s.int(), 1),
  customerNotify: s.optional(s.lazy(() => customerNotify1Schema)),
  startAt: s.optional(s.int()),
  expireBy: s.optional(s.int()),
  addons: s.optional(s.array(s.lazy(() => addonSchema))),
  offerId: s.optional(s.string()),
  notifyInfo: s.optional(s.lazy(() => notifyInfoSchema)),
  notes: s.optional(s.record(s.string(), s.string())),
  _keysMap: {
    planId: "plan_id",
    totalCount: "total_count",
    customerNotify: "customer_notify",
    startAt: "start_at",
    expireBy: "expire_by",
    offerId: "offer_id",
    notifyInfo: "notify_info",
  },
};

export const subscriptionsRequestInternalSchema: Schema<SubscriptionsRequest> =
  s.object<SubscriptionsRequest>(subscriptionsRequestProperties, { additionalProperties: s.json() });

export const subscriptionsRequestSchema: Schema<SubscriptionsRequest> = s.lazySchema(() =>
  s.object<SubscriptionsRequest>(
    {
      ...subscriptionsRequestProperties,
      notes: s.optional(s.record(s.string(), s.string()).check(s.maxProperties(15))),
    },
    { additionalProperties: s.json() },
  ),
);
