import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The phone number or ID of the agent involved. */
export type AgentNumber1 = string;

export const agentNumber1Schema: Schema<AgentNumber1> = s.of<AgentNumber1>(s.union([s.string()]));
