import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Type of the agent with which the session occurred */
export type AgentType1 = string;

export const agentType1Schema: Schema<AgentType1> = s.of<AgentType1>(s.union([s.string()]));
