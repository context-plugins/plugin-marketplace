import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Name of the agent with which the session occurred */
export type AgentName1 = string;

export const agentName1Schema: Schema<AgentName1> = s.of<AgentName1>(s.union([s.string()]));
