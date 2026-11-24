import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AgentTurnSpecification = {
  /** The agent prompt for the agent turn in a test set. */
  agentPrompt: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const agentTurnSpecificationSchema: Schema<AgentTurnSpecification> = s.object<AgentTurnSpecification>(
  {
    agentPrompt: s.string(),
  },
  { additionalProperties: s.json() },
);
