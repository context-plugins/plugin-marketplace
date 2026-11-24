import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** ID of the agent session that created this browser (None for standalone BaaS sessions) */
export type AgentSessionId = string;

export const agentSessionIdSchema: Schema<AgentSessionId> = s.of<AgentSessionId>(s.union([s.string()]));
