import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Provides a code indicating the reason why a specific analytics feature was skipped during the
 * analysis of a call analytics job.
 */
export const ReasonCode = {
  InsufficientConversationContent: "INSUFFICIENT_CONVERSATION_CONTENT",
  FailedSafetyGuidelines: "FAILED_SAFETY_GUIDELINES",
} as const;
export type ReasonCode = (typeof ReasonCode)[keyof typeof ReasonCode] | (string & {});

export const reasonCodeSchema: EnumSchema<ReasonCode> = s.enumOf<ReasonCode>(ReasonCode);
