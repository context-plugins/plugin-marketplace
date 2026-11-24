import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { agentPoolSchema, type AgentPool } from "./agent-pool.js";

/** Response from ListAgentPools. */
export type ListAgentPoolsResponse = {
  /** A list of agent pools. */
  agentPools?: AgentPool[];
  /** The list next page token. */
  nextPageToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listAgentPoolsResponseSchema: Schema<ListAgentPoolsResponse> = s.object<ListAgentPoolsResponse>(
  {
    agentPools: s.optional(s.array(s.lazy(() => agentPoolSchema))),
    nextPageToken: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
