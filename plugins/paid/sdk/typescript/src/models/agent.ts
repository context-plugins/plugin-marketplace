import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { agentAttributeSchema, type AgentAttribute } from "./agent-attribute.js";

export type Agent = {
  id: string;
  externalId?: string;
  organizationId: string;
  name: string;
  description?: string;
  active: boolean;
  agentCode?: string;
  agentAttributes?: AgentAttribute[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const agentSchema: Schema<Agent> = s.object<Agent>(
  {
    id: s.string(),
    externalId: s.optional(s.string()),
    organizationId: s.string(),
    name: s.string(),
    description: s.optional(s.string()),
    active: s.boolean(),
    agentCode: s.optional(s.string()),
    agentAttributes: s.optional(s.array(s.lazy(() => agentAttributeSchema))),
  },
  { additionalProperties: s.json() },
);
