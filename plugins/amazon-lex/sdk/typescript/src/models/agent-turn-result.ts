import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { executionErrorDetailsSchema, type ExecutionErrorDetails } from "./execution-error-details.js";

export type AgentTurnResult = {
  /** The expected agent prompt for the agent turn in a test set execution. */
  expectedAgentPrompt: string;
  /** The actual agent prompt for the agent turn in a test set execution. */
  actualAgentPrompt?: string;
  errorDetails?: ExecutionErrorDetails;
  /** The actual elicited slot for the agent turn in a test set execution. */
  actualElicitedSlot?: string;
  /** The actual intent for the agent turn in a test set execution. */
  actualIntent?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const agentTurnResultSchema: Schema<AgentTurnResult> = s.object<AgentTurnResult>(
  {
    expectedAgentPrompt: s.string(),
    actualAgentPrompt: s.optional(s.string()),
    errorDetails: s.optional(s.lazy(() => executionErrorDetailsSchema)),
    actualElicitedSlot: s.optional(s.string()),
    actualIntent: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
