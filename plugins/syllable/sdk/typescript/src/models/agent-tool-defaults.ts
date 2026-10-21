import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { agentToolFieldDefaultSchema, type AgentToolFieldDefault } from "./agent-tool-field-default.js";

/** Agent-level static parameter values for a tool, overriding any tool-level defaults. */
export type AgentToolDefaults = {
  /** The name of the tool */
  toolName: string;
  /** The default values for fields used in the tool */
  defaultValues: AgentToolFieldDefault[];
};

export const agentToolDefaultsSchema: Schema<AgentToolDefaults> = s.object<AgentToolDefaults>({
  toolName: s.string(),
  defaultValues: s.array(s.lazy(() => agentToolFieldDefaultSchema)),
  _keysMap: {
    toolName: "tool_name",
    defaultValues: "default_values",
  },
});
