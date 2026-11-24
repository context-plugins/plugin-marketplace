import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { agentAttributeSchema, type AgentAttribute } from "./agent-attribute.js";

export type AgentUpdate = {
  name?: string;
  description?: string;
  externalId?: string;
  active?: boolean;
  agentCode?: string;
  agentAttributes?: AgentAttribute[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const agentUpdateSchema: Schema<AgentUpdate> = s.object<AgentUpdate>(
  {
    name: s.optional(s.string()),
    description: s.optional(s.string()),
    externalId: s.optional(s.string()),
    active: s.optional(s.boolean()),
    agentCode: s.optional(s.string()),
    agentAttributes: s.optional(s.array(s.lazy(() => agentAttributeSchema))),
  },
  { additionalProperties: s.json() },
);
