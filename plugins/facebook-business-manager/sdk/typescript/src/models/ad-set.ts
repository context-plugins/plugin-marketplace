import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { bidStrategySchema, type BidStrategy } from "./bid-strategy.js";
import { billingEventSchema, type BillingEvent } from "./billing-event.js";
import { optimizationGoalSchema, type OptimizationGoal } from "./optimization-goal.js";
import { statusSchema, type Status } from "./status.js";
import { targetingInternalSchema, targetingSchema, type Targeting } from "./targeting.js";

export type AdSet = {
  /** The ID of the ad set */
  id?: string;
  /** The name of the ad set */
  name?: string;
  /** The ID of the parent campaign */
  campaignId?: string;
  status?: Status;
  /** Effective status considering parent statuses */
  effectiveStatus?: string;
  /** Daily budget in smallest currency unit */
  dailyBudget?: string;
  /** Lifetime budget in smallest currency unit */
  lifetimeBudget?: string;
  /** The optimization goal for ad delivery */
  optimizationGoal?: OptimizationGoal;
  /** The event used for billing */
  billingEvent?: BillingEvent;
  /** Bid amount in smallest currency unit */
  bidAmount?: number;
  /** Bidding strategy for the ad set */
  bidStrategy?: BidStrategy;
  /** Targeting specification for the ad set */
  targeting?: Targeting;
  startTime?: Date;
  endTime?: Date;
  createdTime?: Date;
  updatedTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const adSetProperties: s.Shape<AdSet> = {
  id: s.optional(s.string()),
  name: s.optional(s.string()),
  campaignId: s.optional(s.string()),
  status: s.optional(s.lazy(() => statusSchema)),
  effectiveStatus: s.optional(s.string()),
  dailyBudget: s.optional(s.string()),
  lifetimeBudget: s.optional(s.string()),
  optimizationGoal: s.optional(s.lazy(() => optimizationGoalSchema)),
  billingEvent: s.optional(s.lazy(() => billingEventSchema)),
  bidAmount: s.optional(s.int()),
  bidStrategy: s.optional(s.lazy(() => bidStrategySchema)),
  targeting: s.optional(s.lazy(() => targetingInternalSchema)),
  startTime: s.optional(s.dateTime()),
  endTime: s.optional(s.dateTime()),
  createdTime: s.optional(s.dateTime()),
  updatedTime: s.optional(s.dateTime()),
  _keysMap: {
    campaignId: "campaign_id",
    effectiveStatus: "effective_status",
    dailyBudget: "daily_budget",
    lifetimeBudget: "lifetime_budget",
    optimizationGoal: "optimization_goal",
    billingEvent: "billing_event",
    bidAmount: "bid_amount",
    bidStrategy: "bid_strategy",
    startTime: "start_time",
    endTime: "end_time",
    createdTime: "created_time",
    updatedTime: "updated_time",
  },
};

export const adSetInternalSchema: Schema<AdSet> = s.object<AdSet>(adSetProperties, {
  additionalProperties: s.json(),
});

export const adSetSchema: Schema<AdSet> = s.lazySchema(() =>
  s.object<AdSet>(
    {
      ...adSetProperties,
      targeting: s.optional(s.lazy(() => targetingSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
