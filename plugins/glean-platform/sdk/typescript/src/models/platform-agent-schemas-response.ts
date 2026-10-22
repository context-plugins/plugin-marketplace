import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { platformActionSummarySchema, type PlatformActionSummary } from "./platform-action-summary.js";

export type PlatformAgentSchemasResponse = {
  /** ID of the agent. */
  agentId: string;
  /** Name of the agent. */
  name?: string;
  /** Agent input schema in JSON Schema format. */
  inputSchema: Record<string, unknown>;
  /** Agent output schema in JSON Schema format. */
  outputSchema: Record<string, unknown>;
  /** Tools that the agent can invoke, when requested. */
  tools?: PlatformActionSummary[];
  /** Platform-generated request ID for support correlation. */
  requestId: string;
};

export const platformAgentSchemasResponseSchema: Schema<PlatformAgentSchemasResponse> =
  s.object<PlatformAgentSchemasResponse>({
    agentId: s.string(),
    name: s.optional(s.string()),
    inputSchema: s.record(s.string(), s.unknown()),
    outputSchema: s.record(s.string(), s.unknown()),
    tools: s.optional(s.array(s.lazy(() => platformActionSummarySchema))),
    requestId: s.string(),
    _keysMap: {
      agentId: "agent_id",
      inputSchema: "input_schema",
      outputSchema: "output_schema",
      requestId: "request_id",
    },
  });
