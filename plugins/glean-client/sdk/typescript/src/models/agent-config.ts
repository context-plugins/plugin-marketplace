import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { agent2Schema, type Agent2 } from "./agent2.js";
import { modeSchema, type Mode } from "./mode.js";
import { toolSetsSchema, type ToolSets } from "./tool-sets.js";

/** Describes the agent that executes the request. */
export type AgentConfig = {
  /** Name of the agent. */
  agent?: Agent2;
  /**
   * The types of tools that the agent is allowed to use. Only works with FAST and ADVANCED `agent`
   * values
   */
  toolSets?: ToolSets;
  /** Top level modes to run GleanChat in. */
  mode?: Mode;
  /** Whether the agent should create an image. */
  useImageGeneration?: boolean;
};

export const agentConfigSchema: Schema<AgentConfig> = s.object<AgentConfig>({
  agent: s.optional(s.lazy(() => agent2Schema)),
  toolSets: s.optional(s.lazy(() => toolSetsSchema)),
  mode: s.optional(s.lazy(() => modeSchema)),
  useImageGeneration: s.optional(s.boolean()),
});
