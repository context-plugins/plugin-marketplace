import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { platformEvaluatedLimitSchema, type PlatformEvaluatedLimit } from "./platform-evaluated-limit.js";
import {
  platformUsageDecisionCauseSchema,
  type PlatformUsageDecisionCause,
} from "./platform-usage-decision-cause.js";
import {
  platformUsageHeadroomValueSchema,
  type PlatformUsageHeadroomValue,
} from "./platform-usage-headroom-value.js";
import {
  platformUsageLimitDecision3Schema,
  type PlatformUsageLimitDecision3,
} from "./platform-usage-limit-decision3.js";
import { platformUsageSelector5Schema, type PlatformUsageSelector5 } from "./platform-usage-selector5.js";
import { platformUsageTarget4Schema, type PlatformUsageTarget4 } from "./platform-usage-target4.js";

/**
 * Configured-budget evaluation for a concrete target and selector, not runtime admission, model
 * eligibility, or agent-run preflight. AVAILABLE can mean that no configured policy applies;
 * inspect applicable_policy_count and the exact selector echo. Configured caps are
 * evaluated_limits[].value.amount, accrued usage is evaluated_limits[].used, and remaining budget
 * is effective_limits[].remaining. Approved one-period grants raise headroom without changing the
 * configured cap. Units are never combined or converted. Non-admin evaluation omits shared budgets
 * from applicable_policy_count, evaluated_limits, and effective_limits; decision can be BLOCKED by
 * a shared budget even when the target's own limits show remaining headroom. decision_causes
 * explains every non-AVAILABLE decision, including one caused by a budget that is not listed.
 */
export type PlatformEvaluateUsageLimitResponse = {
  /**
   * Normalized concrete ORGANIZATION, USER, or AGENT evaluated. USER targets contain the canonical
   * user_id, not the supplied alias ID or email. Included even when no configured policies apply.
   */
  target: PlatformUsageTarget4;
  /** Exact evaluated selector, including case and padding of client_id; never normalized. */
  usageSelector: PlatformUsageSelector5;
  /**
   * Number of applicable configured policies returned in evaluated_limits, including UNLIMITED
   * policies. Zero explicitly means no returned policy matched, not an unlimited configured rule.
   * Non-admin evaluation excludes shared budgets. Included even when zero.
   */
  applicablePolicyCount: number;
  /**
   * Overall configured-budget status across all applicable limits, not runtime admission. On
   * non-admin evaluation this includes shared budgets that are not returned: BLOCKED with remaining
   * effective_limits headroom means a shared budget is exhausted. Shared soft limits never cause
   * WARNING there. decision_causes explains why decision is not AVAILABLE.
   */
  decision: PlatformUsageLimitDecision3;
  /**
   * Categories of limit that make decision WARNING or BLOCKED, BLOCKED causes first. Empty exactly
   * when decision is AVAILABLE. Each distinct decision, budget_scope, and source_type appears once.
   * A SHARED cause with decision BLOCKED means usage is unavailable even when effective_limits
   * shows remaining headroom. Causes never include amounts, usage, thresholds, or pool identities.
   * Non-admin evaluation reports SHARED causes only when they are BLOCKED.
   */
  decisionCauses: PlatformUsageDecisionCause[];
  /**
   * Tightest remaining budget per finite unit, ordered USD then CREDITS. remaining is headroom
   * after accrued usage and approved one-period grants, not a configured cap. Units are never
   * combined or converted. When no finite policy applies, contains a single UNLIMITED entry without
   * remaining, unit, or enforcement, including when applicable_policy_count is zero. Covers only
   * returned evaluated_limits, so non-admin headroom excludes shared budgets. This
   * configured-budget result is not a runtime admission guarantee.
   */
  effectiveLimits: PlatformUsageHeadroomValue[];
  /** Per-rule evaluation details; non-admin evaluation omits shared budgets. */
  evaluatedLimits: PlatformEvaluatedLimit[];
  /** ISO 8601 timestamp of when usage counters were read. */
  evaluatedAt: Date;
  /** Request identifier for correlating this response. */
  requestId: string;
};

export const platformEvaluateUsageLimitResponseSchema: Schema<PlatformEvaluateUsageLimitResponse> =
  s.object<PlatformEvaluateUsageLimitResponse>({
    target: platformUsageTarget4Schema,
    usageSelector: platformUsageSelector5Schema,
    applicablePolicyCount: s.int(),
    decision: platformUsageLimitDecision3Schema,
    decisionCauses: s.array(s.lazy(() => platformUsageDecisionCauseSchema)),
    effectiveLimits: s.array(s.lazy(() => platformUsageHeadroomValueSchema)),
    evaluatedLimits: s.array(s.lazy(() => platformEvaluatedLimitSchema)),
    evaluatedAt: s.dateTime(),
    requestId: s.string(),
    _keysMap: {
      usageSelector: "usage_selector",
      applicablePolicyCount: "applicable_policy_count",
      decisionCauses: "decision_causes",
      effectiveLimits: "effective_limits",
      evaluatedLimits: "evaluated_limits",
      evaluatedAt: "evaluated_at",
      requestId: "request_id",
    },
  });
