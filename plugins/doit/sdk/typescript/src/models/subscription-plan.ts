import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  subscriptionPlanCommitmentIntervalSchema,
  type SubscriptionPlanCommitmentInterval,
} from "./subscription-plan-commitment-interval.js";

/** Plan details for a subscription, indicating whether it is a commitment or flexible plan. */
export type SubscriptionPlan = {
  /** The start and end dates of an annual commitment term. */
  commitmentInterval?: SubscriptionPlanCommitmentInterval;
  /**
   * Whether this subscription is on an annual commitment plan (true) or a flexible plan (false).
   */
  isCommitmentPlan?: boolean;
  /** The name of the plan, e.g. ANNUAL_MONTHLY_PAY, ANNUAL_YEARLY_PAY, FLEXIBLE, or TRIAL. */
  planName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const subscriptionPlanSchema: Schema<SubscriptionPlan> = s.object<SubscriptionPlan>(
  {
    commitmentInterval: s.optional(s.lazy(() => subscriptionPlanCommitmentIntervalSchema)),
    isCommitmentPlan: s.optional(s.boolean()),
    planName: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
