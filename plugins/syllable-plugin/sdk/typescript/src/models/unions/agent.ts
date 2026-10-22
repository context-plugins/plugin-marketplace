import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { agentResponseSchema, type AgentResponse } from "../agent-response.js";

/** Definition of the agent with which the channel target is associated. */
export type Agent = AgentResponse;

export const agentSchema: Schema<Agent> = s.of<Agent>(s.union([s.lazy(() => agentResponseSchema)]));
