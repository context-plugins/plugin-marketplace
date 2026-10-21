import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { agentCreateToolRefSchema, type AgentCreateToolRef } from "./agent-create-tool-ref.js";
import { agentCreateToolsetNameSchema, type AgentCreateToolsetName } from "./agent-create-toolset-name.js";

export type AgentCreateToolset = {
  /** Registered toolset name (lowercase) accepted by the create-agent gateway. */
  name: AgentCreateToolsetName;
  displayName?: string;
  type?: string;
  instanceId?: string;
  instanceName?: string;
  tools?: AgentCreateToolRef[];
};

export const agentCreateToolsetSchema: Schema<AgentCreateToolset> = s.object<AgentCreateToolset>({
  name: agentCreateToolsetNameSchema,
  displayName: s.optional(s.string()),
  type: s.optional(s.string()),
  instanceId: s.optional(s.string()),
  instanceName: s.optional(s.string()),
  tools: s.optional(s.array(s.lazy(() => agentCreateToolRefSchema))),
});
