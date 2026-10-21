import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Decision for this limit. */
export const PlatformUsageLimitDecision2 = {
  Available: "AVAILABLE",
  Warning: "WARNING",
  Blocked: "BLOCKED",
} as const;
export type PlatformUsageLimitDecision2 =
  | (typeof PlatformUsageLimitDecision2)[keyof typeof PlatformUsageLimitDecision2]
  | (string & {});

export const platformUsageLimitDecision2Schema: EnumSchema<PlatformUsageLimitDecision2> =
  s.enumOf<PlatformUsageLimitDecision2>(PlatformUsageLimitDecision2);
