import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Guardrail fields on a message (max sends, eligibility dates, etc.) */
export type DecisionEngineMessageGuardrails = {
  maxSendsPerUser?: number;
  maxSendsPerUserWindowDays?: number;
  minOtherMessagesInBetween?: number;
  firstEligibleSendDate?: string;
  lastEligibleSendDate?: string;
};

export const decisionEngineMessageGuardrailsSchema: Schema<DecisionEngineMessageGuardrails> =
  s.object<DecisionEngineMessageGuardrails>({
    maxSendsPerUser: s.optional(s.float64()),
    maxSendsPerUserWindowDays: s.optional(s.float64()),
    minOtherMessagesInBetween: s.optional(s.float64()),
    firstEligibleSendDate: s.optional(s.string()),
    lastEligibleSendDate: s.optional(s.string()),
  });
