import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const BlockedReason = {
  BlockedReasonUnspecified: "BLOCKED_REASON_UNSPECIFIED",
  NoRevenueMetrics: "NO_REVENUE_METRICS",
  NoCostMetrics: "NO_COST_METRICS",
} as const;
export type BlockedReason = (typeof BlockedReason)[keyof typeof BlockedReason] | (string & {});

export const blockedReasonSchema: EnumSchema<BlockedReason> = s.enumOf<BlockedReason>(BlockedReason);
