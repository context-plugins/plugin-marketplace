import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  agentCreateResponseMcpServerToolSchema,
  type AgentCreateResponseMcpServerTool,
} from "./agent-create-response-mcp-server-tool.js";

export type AgentCreateResponseMcpServer = {
  name: string;
  /** Human-readable MCP server product label (for example `Jira MCP`). */
  displayName: string;
  key: string;
  tools: AgentCreateResponseMcpServerTool[];
};

export const agentCreateResponseMcpServerSchema: Schema<AgentCreateResponseMcpServer> =
  s.object<AgentCreateResponseMcpServer>({
    name: s.string(),
    displayName: s.string(),
    key: s.string(),
    tools: s.array(s.lazy(() => agentCreateResponseMcpServerToolSchema)),
  });
