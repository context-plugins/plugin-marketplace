import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { agentSchema, type Agent } from "./agent.js";

/**
 * Success envelope returned by `GET /agents/{agentKey}`.
 *
 * The Node gateway forwards the backend response as an envelope with a top-level status/message and
 * the detailed agent projection nested under `agent`.
 */
export type GetAgentResponse = {
  status: string;
  message: string;
  /**
   * Detailed agent projection returned by agent detail-style endpoints such as `GET
   * /agents/{agentKey}`.
   */
  agent: Agent;
};

export const getAgentResponseSchema: Schema<GetAgentResponse> = s.object<GetAgentResponse>({
  status: s.string(),
  message: s.string(),
  agent: agentSchema,
});
