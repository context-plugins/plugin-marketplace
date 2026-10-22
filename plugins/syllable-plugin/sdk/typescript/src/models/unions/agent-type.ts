import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Value of the "type" field of the agent with which the conversation occurred */
export type AgentType = string;

export const agentTypeSchema: Schema<AgentType> = s.of<AgentType>(s.union([s.string()]));
