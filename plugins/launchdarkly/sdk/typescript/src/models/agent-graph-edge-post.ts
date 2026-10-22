import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** An edge in an agent graph connecting two AI Configs */
export type AgentGraphEdgePost = {
  /** A unique key for this edge within the graph */
  key: string;
  /** The AI Config key that is the source of this edge */
  sourceConfig: string;
  /** The AI Config key that is the target of this edge */
  targetConfig: string;
  /** The handoff options from the source AI Config to the target AI Config */
  handoff?: Record<string, unknown>;
};

export const agentGraphEdgePostSchema: Schema<AgentGraphEdgePost> = s.object<AgentGraphEdgePost>({
  key: s.string(),
  sourceConfig: s.string(),
  targetConfig: s.string(),
  handoff: s.optional(s.record(s.string(), s.unknown())),
});
