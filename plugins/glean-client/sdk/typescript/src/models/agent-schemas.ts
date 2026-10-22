import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { actionSummarySchema, type ActionSummary } from "./action-summary.js";

/** Defines the structure and properties of an agent. */
export type AgentSchemas = {
  /** The ID of the agent. */
  agentId: string;
  /** The name of the agent. */
  name?: string;
  /** The schema for the agent input. In JSON Schema format. */
  inputSchema: Record<string, unknown>;
  /** The schema for the agent output. In JSON Schema format. */
  outputSchema: Record<string, unknown>;
  /**
   * List of tools that the agent can invoke. Only included when include_tools query parameter is
   * set to true.
   */
  tools?: ActionSummary[];
};

export const agentSchemasSchema: Schema<AgentSchemas> = s.object<AgentSchemas>({
  agentId: s.string(),
  name: s.optional(s.string()),
  inputSchema: s.record(s.string(), s.unknown()),
  outputSchema: s.record(s.string(), s.unknown()),
  tools: s.optional(s.array(s.lazy(() => actionSummarySchema))),
  _keysMap: {
    agentId: "agent_id",
    inputSchema: "input_schema",
    outputSchema: "output_schema",
  },
});
