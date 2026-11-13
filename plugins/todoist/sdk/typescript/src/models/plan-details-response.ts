import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { currentPlanStatusSchema, type CurrentPlanStatus } from "./current-plan-status.js";
import { currentPlanSchema, type CurrentPlan } from "./current-plan.js";
import { formattedPriceListingSchema, type FormattedPriceListing } from "./formatted-price-listing.js";
import { planPriceSchema, type PlanPrice } from "./plan-price.js";
import { trialGrantViewSchema, type TrialGrantView } from "./trial-grant-view.js";

export type PlanDetailsResponse = {
  /** Current number of active workspace members. */
  currentMemberCount: number;
  /** Current workspace plan. */
  currentPlan: CurrentPlan;
  /** Current workspace plan status. */
  currentPlanStatus: CurrentPlanStatus;
  /** Date when the workspace downgrades, or `null` if not scheduled. */
  downgradeAt: string | null;
  /** Current number of active workspace projects. */
  currentActiveProjects: number;
  /** Maximum number of active projects allowed by the plan. */
  maximumActiveProjects: number;
  /** Available plan prices for the workspace country. */
  priceList: FormattedPriceListing[];
  /** ID of the workspace. */
  workspaceId: number;
  /** Whether the workspace is currently trialing a paid plan. */
  isTrialing: boolean;
  /** Date when the current trial ends, or `null` if not trialing. */
  trialEndsAt: string | null;
  /** Whether the plan cancels at the end of the billing period. */
  cancelAtPeriodEnd: boolean;
  /** Whether the workspace has already used a trial. */
  hasTrialed: boolean;
  /** Current subscription price, or `null` when there is no active subscription. */
  planPrice: PlanPrice | null;
  /** Whether a billing portal is available for the workspace. */
  hasBillingPortal: boolean;
  /** Whether the billing portal can switch the subscription to annual billing. */
  hasBillingPortalSwitchToAnnual: boolean;
  /**
   * The trial the workspace's next Business checkout starts instead of any other, even after an
   * earlier trial, e.g. a migrated team's prepaid time. `null` without one.
   */
  trialGrant: TrialGrantView | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const planDetailsResponseSchema: Schema<PlanDetailsResponse> = s.object<PlanDetailsResponse>(
  {
    currentMemberCount: s.int(),
    currentPlan: currentPlanSchema,
    currentPlanStatus: currentPlanStatusSchema,
    downgradeAt: s.nullable(s.string()),
    currentActiveProjects: s.int(),
    maximumActiveProjects: s.int(),
    priceList: s.array(s.lazy(() => formattedPriceListingSchema)),
    workspaceId: s.int(),
    isTrialing: s.boolean(),
    trialEndsAt: s.nullable(s.string()),
    cancelAtPeriodEnd: s.boolean(),
    hasTrialed: s.boolean(),
    planPrice: s.nullable(s.lazy(() => planPriceSchema)),
    hasBillingPortal: s.boolean(),
    hasBillingPortalSwitchToAnnual: s.boolean(),
    trialGrant: s.nullable(s.lazy(() => trialGrantViewSchema)),
    _keysMap: {
      currentMemberCount: "current_member_count",
      currentPlan: "current_plan",
      currentPlanStatus: "current_plan_status",
      downgradeAt: "downgrade_at",
      currentActiveProjects: "current_active_projects",
      maximumActiveProjects: "maximum_active_projects",
      priceList: "price_list",
      workspaceId: "workspace_id",
      isTrialing: "is_trialing",
      trialEndsAt: "trial_ends_at",
      cancelAtPeriodEnd: "cancel_at_period_end",
      hasTrialed: "has_trialed",
      planPrice: "plan_price",
      hasBillingPortal: "has_billing_portal",
      hasBillingPortalSwitchToAnnual: "has_billing_portal_switch_to_annual",
      trialGrant: "trial_grant",
    },
  },
  { additionalProperties: s.json() },
);
