import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { agentGraphEdgeSchema, type AgentGraphEdge } from "./agent-graph-edge.js";
import { aiConfigsAccessSchema, type AiConfigsAccess } from "./ai-configs-access.js";
import { agentGraphMaintainerSchema, type AgentGraphMaintainer } from "./unions/agent-graph-maintainer.js";

/** An agent graph representing a directed graph of AI Configs */
export type AgentGraph = {
  access?: AiConfigsAccess;
  /** A unique key for the agent graph */
  key: string;
  /** A human-readable name for the agent graph */
  name: string;
  /** A description of the agent graph */
  description?: string;
  maintainer?: AgentGraphMaintainer;
  /** The AI Config key of the root node */
  rootConfigKey?: string;
  /** The edges in the graph */
  edges?: AgentGraphEdge[];
  createdAt: number;
  updatedAt: number;
};

export const agentGraphSchema: Schema<AgentGraph> = s.object<AgentGraph>({
  access: s.optional(s.lazy(() => aiConfigsAccessSchema)),
  key: s.string(),
  name: s.string(),
  description: s.optional(s.string()),
  maintainer: s.optional(s.lazy(() => agentGraphMaintainerSchema)),
  rootConfigKey: s.optional(s.string()),
  edges: s.optional(s.array(s.lazy(() => agentGraphEdgeSchema))),
  createdAt: s.int(),
  updatedAt: s.int(),
  _keysMap: {
    access: "_access",
    maintainer: "_maintainer",
  },
});
