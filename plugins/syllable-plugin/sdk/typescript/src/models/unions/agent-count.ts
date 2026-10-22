import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The number of agents using the prompt */
export type AgentCount = number;

export const agentCountSchema: Schema<AgentCount> = s.of<AgentCount>(s.union([s.int()]));
