import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { agentCreateToolsetNameSchema, type AgentCreateToolsetName } from "./agent-create-toolset-name.js";
import { toolSchema, type Tool } from "./tool.js";

/**
 * Toolset instance linked to an agent, as projected by the graph store on `GET /agents/{agentKey}`
 * and `GET /agents`. Multiple instances of the same integration type are distinguished by
 * `instanceId` and optional `instanceName`.
 */
export type Toolset = {
  /** Toolset instance node key in the backing graph store. */
  key?: string;
  /** Integration / toolset type key. */
  name?: AgentCreateToolsetName;
  /** Human-readable toolset product label (for example `Jira` or `Slack`). */
  displayName?: string;
  type?: string;
  /** Admin-created toolset instance id */
  instanceId?: string;
  /** Human-readable instance label (e.g. sidebar instance name) */
  instanceName?: string;
  /**
   * Tool names explicitly selected for this toolset instance, when the instance was created with a
   * subset selection. `null`/absent when the instance exposes all of the toolset's tools.
   */
  selectedTools?: string[] | null;
  tools?: Tool[];
};

export const toolsetSchema: Schema<Toolset> = s.object<Toolset>({
  key: s.optional(s.string()),
  name: s.optional(s.lazy(() => agentCreateToolsetNameSchema)),
  displayName: s.optional(s.string()),
  type: s.optional(s.string()),
  instanceId: s.optional(s.string()),
  instanceName: s.optional(s.string()),
  selectedTools: s.optionalNullable(s.array(s.string())),
  tools: s.optional(s.array(s.lazy(() => toolSchema))),
  _keysMap: {
    key: "_key",
  },
});
