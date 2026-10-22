import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { toolAgentInfoSchema, type ToolAgentInfo } from "../tool-agent-info.js";

/** IDs and names of the agents linked to the tool via a prompt */
export type AgentsInfo = ToolAgentInfo[];

export const agentsInfoSchema: Schema<AgentsInfo> = s.of<AgentsInfo>(
  s.union([s.array(s.lazy(() => toolAgentInfoSchema))]),
);
