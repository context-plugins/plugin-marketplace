import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { agentGraphEdgeSchema, type AgentGraphEdge } from "./agent-graph-edge.js";

/**
 * Request body for updating an agent graph. If rootConfigKey or edges are present, both must be
 * present.
 */
export type AgentGraphPatch = {
  /** A human-readable name for the agent graph */
  name?: string;
  /** A description of the agent graph */
  description?: string;
  /**
   * The ID of the member who maintains this agent graph. Pass an empty string to remove maintainer.
   */
  maintainerId?: string;
  /**
   * The key of the team that maintains this agent graph. Pass an empty string to remove maintainer.
   */
  maintainerTeamKey?: string;
  /** The AI Config key of the root node. If present, edges must also be present. */
  rootConfigKey?: string;
  /**
   * The edges in the graph. If present, rootConfigKey must also be present. Replaces all existing
   * edges.
   */
  edges?: AgentGraphEdge[];
};

export const agentGraphPatchSchema: Schema<AgentGraphPatch> = s.object<AgentGraphPatch>({
  name: s.optional(s.string()),
  description: s.optional(s.string()),
  maintainerId: s.optional(s.string()),
  maintainerTeamKey: s.optional(s.string()),
  rootConfigKey: s.optional(s.string()),
  edges: s.optional(s.array(s.lazy(() => agentGraphEdgeSchema))),
});
