import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** ID of the agent with which the conversation occurred */
export type AgentId = string;

export const agentIdSchema: Schema<AgentId> = s.of<AgentId>(s.union([s.string()]));
