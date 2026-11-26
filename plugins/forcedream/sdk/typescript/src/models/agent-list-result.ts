import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { agentSchema, type Agent } from "./agent.js";

export type AgentListResult = {
  count?: number;
  agents?: Agent[];
  note?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const agentListResultSchema: Schema<AgentListResult> = s.object<AgentListResult>(
  {
    count: s.optional(s.int()),
    agents: s.optional(s.array(s.lazy(() => agentSchema))),
    note: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
