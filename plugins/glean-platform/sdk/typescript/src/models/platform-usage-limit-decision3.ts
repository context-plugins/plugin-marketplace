import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Overall configured-budget status across all applicable limits, not runtime admission. On
 * non-admin evaluation this includes shared budgets that are not returned: BLOCKED with remaining
 * effective_limits headroom means a shared budget is exhausted. Shared soft limits never cause
 * WARNING there. decision_causes explains why decision is not AVAILABLE.
 */
export const PlatformUsageLimitDecision3 = {
  Available: "AVAILABLE",
  Warning: "WARNING",
  Blocked: "BLOCKED",
} as const;
export type PlatformUsageLimitDecision3 =
  | (typeof PlatformUsageLimitDecision3)[keyof typeof PlatformUsageLimitDecision3]
  | (string & {});

export const platformUsageLimitDecision3Schema: EnumSchema<PlatformUsageLimitDecision3> =
  s.enumOf<PlatformUsageLimitDecision3>(PlatformUsageLimitDecision3);
