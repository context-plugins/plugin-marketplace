import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AgentCreate = {
  name: string;
  description: string;
  agentCode?: string;
  externalId?: string;
  active?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const agentCreateSchema: Schema<AgentCreate> = s.object<AgentCreate>(
  {
    name: s.string(),
    description: s.string(),
    agentCode: s.optional(s.string()),
    externalId: s.optional(s.string()),
    active: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
