import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AgentCreateToolRef = {
  name: string;
  fullName?: string;
  description?: string;
};

export const agentCreateToolRefSchema: Schema<AgentCreateToolRef> = s.object<AgentCreateToolRef>({
  name: s.string(),
  fullName: s.optional(s.string()),
  description: s.optional(s.string()),
});
