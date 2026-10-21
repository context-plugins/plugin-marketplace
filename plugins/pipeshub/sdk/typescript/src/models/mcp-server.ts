import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { tool1Schema, type Tool1 } from "./tool1.js";

/**
 * MCP server instance linked to an agent, as projected by the graph store on `GET
 * /agents/{agentKey}` and `GET /agents` — same shape as `Toolset`. MCP server nodes carry no
 * secrets, only the attach-time snapshot of `instanceId`/`typeId`/`name`.
 */
export type McpServer = {
  /** MCP server instance node key in the backing graph store. */
  key?: string;
  /** MCP server attachment name (attach-time snapshot). */
  name?: string;
  /** Human-readable MCP server product label (for example `Jira MCP`). */
  displayName?: string;
  /** Catalog server type id, when this instance came from a registered template. */
  typeId?: string;
  /** Admin-created MCP server instance id. */
  instanceId?: string;
  tools?: Tool1[];
};

export const mcpServerSchema: Schema<McpServer> = s.object<McpServer>({
  key: s.optional(s.string()),
  name: s.optional(s.string()),
  displayName: s.optional(s.string()),
  typeId: s.optional(s.string()),
  instanceId: s.optional(s.string()),
  tools: s.optional(s.array(s.lazy(() => tool1Schema))),
  _keysMap: {
    key: "_key",
  },
});
