import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Agent ID to update config for */
export type AgentId4 = number;

export const agentId4Schema: Schema<AgentId4> = s.of<AgentId4>(s.union([s.int()]));
