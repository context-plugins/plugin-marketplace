import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { billingIntervalSchema, type BillingInterval } from "./billing-interval.js";
import { couponSchema, type Coupon } from "./coupon.js";
import { pendingBillingIntervalSchema, type PendingBillingInterval } from "./pending-billing-interval.js";
import { pendingTierSchema, type PendingTier } from "./pending-tier.js";
import { promotionCodeSchema, type PromotionCode } from "./promotion-code.js";
import {
  statusBundleSocialOrganizationApiSchema,
  type StatusBundleSocialOrganizationApi,
} from "./status-bundle-social-organization-api.js";
import { stripeSubscriptionItemSchema, type StripeSubscriptionItem } from "./stripe-subscription-item.js";
import { tierSchema, type Tier } from "./tier.js";

export type Subscription = {
  id: string;
  organizationId: string;
  couponId?: string | null;
  promotionCodeId?: string | null;
  stripeSubscriptionId: string;
  stripeSubscriptionItems?: StripeSubscriptionItem[] | null;
  status: StatusBundleSocialOrganizationApi;
  metadata?: Record<string, unknown> | null;
  stripePriceId: string;
  tier: Tier;
  billingInterval: BillingInterval;
  isCustomPrice: boolean;
  customPriceLabel?: string | null;
  customUnitAmount?: number | null;
  customCurrency?: string | null;
  cancelAtPeriodEnd: boolean;
  created: Date | null;
  currentPeriodStart: Date | null;
  currentPeriodEnd: Date | null;
  endedAt?: Date | null;
  cancelAt?: Date | null;
  canceledAt?: Date | null;
  trialStart?: Date | null;
  trialEnd?: Date | null;
  maxMonthlyPosts?: number | null;
  maxMonthlyComments?: number | null;
  maxMonthlyUploads?: number | null;
  maxMonthlyImportedPosts?: number | null;
  pendingTier?: PendingTier | null;
  pendingBillingInterval?: PendingBillingInterval | null;
  pendingPriceId?: string | null;
  pendingEffectiveAt?: Date | null;
  pendingScheduleId?: string | null;
  discountStart?: Date | null;
  discountEnd?: Date | null;
  createdAt: Date | null;
  updatedAt: Date | null;
  coupon?: Coupon | null;
  promotionCode?: PromotionCode | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const subscriptionSchema: Schema<Subscription> = s.object<Subscription>(
  {
    id: s.string(),
    organizationId: s.string(),
    couponId: s.optionalNullable(s.string()),
    promotionCodeId: s.optionalNullable(s.string()),
    stripeSubscriptionId: s.string(),
    stripeSubscriptionItems: s.optionalNullable(s.array(s.lazy(() => stripeSubscriptionItemSchema))),
    status: statusBundleSocialOrganizationApiSchema,
    metadata: s.optionalNullable(s.record(s.string(), s.unknown())),
    stripePriceId: s.string(),
    tier: tierSchema,
    billingInterval: billingIntervalSchema,
    isCustomPrice: s.boolean(),
    customPriceLabel: s.optionalNullable(s.string()),
    customUnitAmount: s.optionalNullable(s.int()),
    customCurrency: s.optionalNullable(s.string()),
    cancelAtPeriodEnd: s.boolean(),
    created: s.nullable(s.dateTime()),
    currentPeriodStart: s.nullable(s.dateTime()),
    currentPeriodEnd: s.nullable(s.dateTime()),
    endedAt: s.optionalNullable(s.dateTime()),
    cancelAt: s.optionalNullable(s.dateTime()),
    canceledAt: s.optionalNullable(s.dateTime()),
    trialStart: s.optionalNullable(s.dateTime()),
    trialEnd: s.optionalNullable(s.dateTime()),
    maxMonthlyPosts: s.optionalNullable(s.float64()),
    maxMonthlyComments: s.optionalNullable(s.float64()),
    maxMonthlyUploads: s.optionalNullable(s.float64()),
    maxMonthlyImportedPosts: s.optionalNullable(s.float64()),
    pendingTier: s.optionalNullable(s.lazy(() => pendingTierSchema)),
    pendingBillingInterval: s.optionalNullable(s.lazy(() => pendingBillingIntervalSchema)),
    pendingPriceId: s.optionalNullable(s.string()),
    pendingEffectiveAt: s.optionalNullable(s.dateTime()),
    pendingScheduleId: s.optionalNullable(s.string()),
    discountStart: s.optionalNullable(s.dateTime()),
    discountEnd: s.optionalNullable(s.dateTime()),
    createdAt: s.nullable(s.dateTime()),
    updatedAt: s.nullable(s.dateTime()),
    coupon: s.optionalNullable(s.lazy(() => couponSchema)),
    promotionCode: s.optionalNullable(s.lazy(() => promotionCodeSchema)),
  },
  { additionalProperties: s.json() },
);
