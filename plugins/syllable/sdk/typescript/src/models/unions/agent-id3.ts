import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Agent ID to fetch config for */
export type AgentId3 = number;

export const agentId3Schema: Schema<AgentId3> = s.of<AgentId3>(s.union([s.int()]));
