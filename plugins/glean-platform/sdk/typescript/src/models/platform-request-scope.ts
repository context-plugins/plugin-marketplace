import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * PERIOD records a decision for the stored request month; approval requires the current UTC month.
 * Existing enforcement consumes eligible USER current-period grants without changing standing
 * rules; no agent or other unsupported target capacity is added. ONGOING identifies a standing-rule
 * approval in existing app records; this API does not support creating ONGOING approvals.
 */
export const PlatformRequestScope = {
  Period: "PERIOD",
  Ongoing: "ONGOING",
} as const;
export type PlatformRequestScope =
  | (typeof PlatformRequestScope)[keyof typeof PlatformRequestScope]
  | (string & {});

export const platformRequestScopeSchema: EnumSchema<PlatformRequestScope> =
  s.enumOf<PlatformRequestScope>(PlatformRequestScope);
