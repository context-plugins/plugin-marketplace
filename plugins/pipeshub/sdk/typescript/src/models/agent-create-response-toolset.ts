import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { agentCreateResponseToolSchema, type AgentCreateResponseTool } from "./agent-create-response-tool.js";
import { agentCreateToolsetNameSchema, type AgentCreateToolsetName } from "./agent-create-toolset-name.js";

export type AgentCreateResponseToolset = {
  /** Registered toolset name (lowercase) accepted by the create-agent gateway. */
  name: AgentCreateToolsetName;
  /** Human-readable toolset product label (for example `Jira` or `Slack`). */
  displayName: string;
  key: string;
  tools: AgentCreateResponseTool[];
};

export const agentCreateResponseToolsetSchema: Schema<AgentCreateResponseToolset> =
  s.object<AgentCreateResponseToolset>({
    name: agentCreateToolsetNameSchema,
    displayName: s.string(),
    key: s.string(),
    tools: s.array(s.lazy(() => agentCreateResponseToolSchema)),
  });
