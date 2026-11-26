import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { agentReliabilitySchema, type AgentReliability } from "./agent-reliability.js";

export type Agent1 = {
  agentSlug?: string;
  /** Honestly null where no real reliability data exists yet. */
  reliability?: AgentReliability | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const agent1Schema: Schema<Agent1> = s.object<Agent1>(
  {
    agentSlug: s.optional(s.string()),
    reliability: s.optionalNullable(s.lazy(() => agentReliabilitySchema)),
    _keysMap: {
      agentSlug: "agent_slug",
    },
  },
  { additionalProperties: s.json() },
);
