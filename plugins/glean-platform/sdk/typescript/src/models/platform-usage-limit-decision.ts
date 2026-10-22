import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Configured-budget status for the target, independent of runtime admission switches. */
export const PlatformUsageLimitDecision = {
  Available: "AVAILABLE",
  Warning: "WARNING",
  Blocked: "BLOCKED",
} as const;
export type PlatformUsageLimitDecision =
  | (typeof PlatformUsageLimitDecision)[keyof typeof PlatformUsageLimitDecision]
  | (string & {});

export const platformUsageLimitDecisionSchema: EnumSchema<PlatformUsageLimitDecision> =
  s.enumOf<PlatformUsageLimitDecision>(PlatformUsageLimitDecision);
