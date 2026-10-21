import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  platformUsageBudgetScope1Schema,
  type PlatformUsageBudgetScope1,
} from "./platform-usage-budget-scope1.js";
import {
  platformUsageLimitDecision1Schema,
  type PlatformUsageLimitDecision1,
} from "./platform-usage-limit-decision1.js";
import {
  platformUsageTargetType2Schema,
  type PlatformUsageTargetType2,
} from "./platform-usage-target-type2.js";

/**
 * Category of limit that reached a soft or hard cap. Identifies what kind of budget is responsible
 * without disclosing its amount, usage, or identity. Treat an unrecognized budget_scope as SHARED
 * and an unrecognized source_type as an opaque population; decision remains authoritative.
 */
export type PlatformUsageDecisionCause = {
  /** WARNING for a reached soft limit or BLOCKED for a reached hard limit; never AVAILABLE. */
  decision: PlatformUsageLimitDecision1;
  /** Whether the reached budget belongs to the evaluated target or is shared with others. */
  budgetScope: PlatformUsageBudgetScope1;
  /**
   * Population that supplied the reached policy, such as ORGANIZATION for the organization budget
   * or DEPARTMENT for an inherited department allowance. New shared pool levels add values here
   * rather than new budget scopes.
   */
  sourceType: PlatformUsageTargetType2;
};

export const platformUsageDecisionCauseSchema: Schema<PlatformUsageDecisionCause> =
  s.object<PlatformUsageDecisionCause>({
    decision: platformUsageLimitDecision1Schema,
    budgetScope: platformUsageBudgetScope1Schema,
    sourceType: platformUsageTargetType2Schema,
    _keysMap: {
      budgetScope: "budget_scope",
      sourceType: "source_type",
    },
  });
