import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  decisionEngineMessageGuardrailsSchema,
  type DecisionEngineMessageGuardrails,
} from "./decision-engine-message-guardrails.js";
import { decisionEngineVariableSchema, type DecisionEngineVariable } from "./decision-engine-variable.js";

/** Decision Engine Message (Public API) */
export type DecisionEngineMessage = {
  id: string;
  name: string;
  channelId: string;
  config: Record<string, unknown>;
  tags?: Record<string, unknown>;
  /** Guardrail fields on a message (max sends, eligibility dates, etc.) */
  guardrails?: DecisionEngineMessageGuardrails;
  variables?: DecisionEngineVariable[];
  createdAt?: Date;
  updatedAt?: Date;
};

export const decisionEngineMessageSchema: Schema<DecisionEngineMessage> = s.object<DecisionEngineMessage>({
  id: s.string(),
  name: s.string(),
  channelId: s.string(),
  config: s.record(s.string(), s.unknown()),
  tags: s.optional(s.record(s.string(), s.unknown())),
  guardrails: s.optional(s.lazy(() => decisionEngineMessageGuardrailsSchema)),
  variables: s.optional(s.array(s.lazy(() => decisionEngineVariableSchema))),
  createdAt: s.optional(s.dateTime()),
  updatedAt: s.optional(s.dateTime()),
});
