import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** ID of agent assigned to campaign */
export type AgentId1 = number;

export const agentId1Schema: Schema<AgentId1> = s.of<AgentId1>(s.union([s.int()]));
