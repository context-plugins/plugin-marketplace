import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  decisionEngineMessageGuardrailsSchema,
  type DecisionEngineMessageGuardrails,
} from "./decision-engine-message-guardrails.js";
import { decisionEngineVariableSchema, type DecisionEngineVariable } from "./decision-engine-variable.js";

/** Request body for updating a Decision Engine message */
export type DecisionEngineMessageUpdate = {
  name?: string;
  config?: Record<string, unknown>;
  tags?: Record<string, unknown>;
  /** Guardrail fields on a message (max sends, eligibility dates, etc.) */
  guardrails?: DecisionEngineMessageGuardrails;
  variables?: DecisionEngineVariable[];
};

export const decisionEngineMessageUpdateSchema: Schema<DecisionEngineMessageUpdate> =
  s.object<DecisionEngineMessageUpdate>({
    name: s.optional(s.string()),
    config: s.optional(s.record(s.string(), s.unknown())),
    tags: s.optional(s.record(s.string(), s.unknown())),
    guardrails: s.optional(s.lazy(() => decisionEngineMessageGuardrailsSchema)),
    variables: s.optional(s.array(s.lazy(() => decisionEngineVariableSchema))),
  });
