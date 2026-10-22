import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { finalSummarySchema, type FinalSummary } from "./unions/final-summary.js";
import { humanInputRequestSchema, type HumanInputRequest } from "./unions/human-input-request.js";

export type AgentStatusResponse = {
  /** Current status of the agent */
  agentStatus: string;
  /** Whether the agent is currently running */
  isRunning: boolean;
  /** Total number of steps executed */
  totalSteps: number;
  /** Final summary of agent execution */
  finalSummary?: FinalSummary;
  /** List of files downloaded by the agent */
  files: Record<string, unknown>[];
  /** List of steps executed by the agent */
  messages: string[];
  /** Timestamp when the agent was created */
  createdAt: string;
  /** Original query given to the agent */
  query: string;
  /** Unique identifier for the agent */
  agentId: string;
  /** Information about the human input being requested, if agent is waiting */
  humanInputRequest?: HumanInputRequest;
};

export const agentStatusResponseSchema: Schema<AgentStatusResponse> = s.object<AgentStatusResponse>({
  agentStatus: s.string(),
  isRunning: s.boolean(),
  totalSteps: s.int(),
  finalSummary: s.optional(s.lazy(() => finalSummarySchema)),
  files: s.array(s.record(s.string(), s.unknown())),
  messages: s.array(s.string()),
  createdAt: s.string(),
  query: s.string(),
  agentId: s.string(),
  humanInputRequest: s.optional(s.lazy(() => humanInputRequestSchema)),
  _keysMap: {
    agentStatus: "agent_status",
    isRunning: "is_running",
    totalSteps: "total_steps",
    finalSummary: "final_summary",
    createdAt: "created_at",
    agentId: "agent_id",
    humanInputRequest: "human_input_request",
  },
});
