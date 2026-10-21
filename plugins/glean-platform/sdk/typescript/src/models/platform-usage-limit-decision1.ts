import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** WARNING for a reached soft limit or BLOCKED for a reached hard limit; never AVAILABLE. */
export const PlatformUsageLimitDecision1 = {
  Available: "AVAILABLE",
  Warning: "WARNING",
  Blocked: "BLOCKED",
} as const;
export type PlatformUsageLimitDecision1 =
  | (typeof PlatformUsageLimitDecision1)[keyof typeof PlatformUsageLimitDecision1]
  | (string & {});

export const platformUsageLimitDecision1Schema: EnumSchema<PlatformUsageLimitDecision1> =
  s.enumOf<PlatformUsageLimitDecision1>(PlatformUsageLimitDecision1);
