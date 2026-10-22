import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Name of the agent with which the conversation occurred */
export type AgentName = string;

export const agentNameSchema: Schema<AgentName> = s.of<AgentName>(s.union([s.string()]));
