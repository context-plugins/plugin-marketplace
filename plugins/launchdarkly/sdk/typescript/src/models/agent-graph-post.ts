import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { agentGraphEdgePostSchema, type AgentGraphEdgePost } from "./agent-graph-edge-post.js";

/** Request body for creating an agent graph */
export type AgentGraphPost = {
  /** A unique key for the agent graph */
  key: string;
  /** A human-readable name for the agent graph */
  name: string;
  /** A description of the agent graph */
  description?: string;
  /** The ID of the member who maintains this agent graph */
  maintainerId?: string;
  /** The key of the team that maintains this agent graph */
  maintainerTeamKey?: string;
  /**
   * The AI Config key of the root node. A missing root implies a newly created graph with metadata
   * only.
   */
  rootConfigKey?: string;
  /** The edges in the graph. If edges or rootConfigKey is present, both must be present. */
  edges?: AgentGraphEdgePost[];
};

export const agentGraphPostSchema: Schema<AgentGraphPost> = s.object<AgentGraphPost>({
  key: s.string(),
  name: s.string(),
  description: s.optional(s.string()),
  maintainerId: s.optional(s.string()),
  maintainerTeamKey: s.optional(s.string()),
  rootConfigKey: s.optional(s.string()),
  edges: s.optional(s.array(s.lazy(() => agentGraphEdgePostSchema))),
});
