import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The number of agents using the custom message */
export type AgentCount1 = number;

export const agentCount1Schema: Schema<AgentCount1> = s.of<AgentCount1>(s.union([s.int()]));
