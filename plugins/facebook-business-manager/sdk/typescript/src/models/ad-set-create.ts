import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { bidStrategy1Schema, type BidStrategy1 } from "./bid-strategy1.js";
import { billingEvent1Schema, type BillingEvent1 } from "./billing-event1.js";
import { optimizationGoal1Schema, type OptimizationGoal1 } from "./optimization-goal1.js";
import { status1Schema, type Status1 } from "./status1.js";

export type AdSetCreate = {
  name: string;
  campaignId: string;
  optimizationGoal: OptimizationGoal1;
  billingEvent: BillingEvent1;
  /** Targeting specification */
  targeting: Record<string, unknown>;
  status: Status1;
  dailyBudget?: string;
  lifetimeBudget?: string;
  bidAmount?: number;
  bidStrategy?: BidStrategy1;
  startTime?: Date;
  endTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const adSetCreateSchema: Schema<AdSetCreate> = s.object<AdSetCreate>(
  {
    name: s.string(),
    campaignId: s.string(),
    optimizationGoal: optimizationGoal1Schema,
    billingEvent: billingEvent1Schema,
    targeting: s.record(s.string(), s.unknown()),
    status: status1Schema,
    dailyBudget: s.optional(s.string()),
    lifetimeBudget: s.optional(s.string()),
    bidAmount: s.optional(s.int()),
    bidStrategy: s.optional(s.lazy(() => bidStrategy1Schema)),
    startTime: s.optional(s.dateTime()),
    endTime: s.optional(s.dateTime()),
    _keysMap: {
      campaignId: "campaign_id",
      optimizationGoal: "optimization_goal",
      billingEvent: "billing_event",
      dailyBudget: "daily_budget",
      lifetimeBudget: "lifetime_budget",
      bidAmount: "bid_amount",
      bidStrategy: "bid_strategy",
      startTime: "start_time",
      endTime: "end_time",
    },
  },
  { additionalProperties: s.json() },
);
