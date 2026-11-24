import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { renewalSettingsSchema, type RenewalSettings } from "./renewal-settings.js";
import { seatsSchema, type Seats } from "./seats.js";
import { subscriptionPlanSchema, type SubscriptionPlan } from "./subscription-plan.js";

/** Subscription details for a G Suite or Office 365 asset. */
export type Subscription = {
  /** The billing method, e.g. ONLINE or OFFLINE. */
  billingMethod?: string;
  /** The time when the subscription was created, in milliseconds since the epoch. */
  creationTime?: number;
  /** The unique identifier of the subscription. */
  id?: string;
  /** Plan details for a subscription, indicating whether it is a commitment or flexible plan. */
  plan?: SubscriptionPlan;
  /** The purchase order ID associated with this subscription, if any. */
  purchaseOrderId?: string;
  /** Settings that control subscription renewal behavior at the end of a commitment term. */
  renewalSettings?: RenewalSettings;
  /** A URL to the subscription management page in the admin console. */
  resourceUiurl?: string;
  /** Licensing seat counts for a subscription. */
  seats?: Seats;
  /** The unique SKU identifier for the subscribed product. */
  skuId?: string;
  /** A human-readable name for the subscribed product SKU. */
  skuName?: string;
  /** The current status of the subscription, e.g. ACTIVE, SUSPENDED, or PENDING. */
  status?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const subscriptionSchema: Schema<Subscription> = s.object<Subscription>(
  {
    billingMethod: s.optional(s.string()),
    creationTime: s.optional(s.int()),
    id: s.optional(s.string()),
    plan: s.optional(s.lazy(() => subscriptionPlanSchema)),
    purchaseOrderId: s.optional(s.string()),
    renewalSettings: s.optional(s.lazy(() => renewalSettingsSchema)),
    resourceUiurl: s.optional(s.string()),
    seats: s.optional(s.lazy(() => seatsSchema)),
    skuId: s.optional(s.string()),
    skuName: s.optional(s.string()),
    status: s.optional(s.string()),
    _keysMap: {
      purchaseOrderId: "purchaseOrderID",
      resourceUiurl: "resourceUIURL",
      skuId: "skuID",
    },
  },
  { additionalProperties: s.json() },
);
