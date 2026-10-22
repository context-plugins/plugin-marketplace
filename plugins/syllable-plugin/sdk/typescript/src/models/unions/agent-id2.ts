import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** ID of the agent with which the session occurred */
export type AgentId2 = string;

export const agentId2Schema: Schema<AgentId2> = s.of<AgentId2>(s.union([s.string()]));
