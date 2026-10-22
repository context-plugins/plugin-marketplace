import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AgentCreateWarning = {
  name?: string;
  error?: string;
};

export const agentCreateWarningSchema: Schema<AgentCreateWarning> = s.object<AgentCreateWarning>({
  name: s.optional(s.string()),
  error: s.optional(s.string()),
});
