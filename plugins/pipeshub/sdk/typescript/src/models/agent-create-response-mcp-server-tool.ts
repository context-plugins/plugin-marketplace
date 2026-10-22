import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AgentCreateResponseMcpServerTool = {
  name: string;
  fullName: string;
  key: string;
};

export const agentCreateResponseMcpServerToolSchema: Schema<AgentCreateResponseMcpServerTool> =
  s.object<AgentCreateResponseMcpServerTool>({
    name: s.string(),
    fullName: s.string(),
    key: s.string(),
  });
