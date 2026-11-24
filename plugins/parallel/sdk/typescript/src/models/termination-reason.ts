import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TerminationReason = {
  LowMatchRate: "low_match_rate",
  MatchLimitMet: "match_limit_met",
  CandidatesExhausted: "candidates_exhausted",
  UserCancelled: "user_cancelled",
  ErrorOccurred: "error_occurred",
  Timeout: "timeout",
  InsufficientFunds: "insufficient_funds",
} as const;
export type TerminationReason = (typeof TerminationReason)[keyof typeof TerminationReason] | (string & {});

export const terminationReasonSchema: EnumSchema<TerminationReason> =
  s.enumOf<TerminationReason>(TerminationReason);
