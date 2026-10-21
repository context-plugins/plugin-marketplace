import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AgentCreateResponseTool = {
  name: string;
  fullName: string;
  key: string;
};

export const agentCreateResponseToolSchema: Schema<AgentCreateResponseTool> =
  s.object<AgentCreateResponseTool>({
    name: s.string(),
    fullName: s.string(),
    key: s.string(),
  });
