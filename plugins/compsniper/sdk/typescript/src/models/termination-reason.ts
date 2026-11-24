import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TerminationReason = {
  NaturalEnd: "natural_end",
  MaxPagesReached: "maxPages_reached",
  QuotaExhausted: "quota_exhausted",
  UpstreamUnhealthy: "upstream_unhealthy",
  Cancelled: "cancelled",
  TerminalError: "terminal_error",
} as const;
export type TerminationReason = (typeof TerminationReason)[keyof typeof TerminationReason] | (string & {});

export const terminationReasonSchema: EnumSchema<TerminationReason> =
  s.enumOf<TerminationReason>(TerminationReason);
