import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AgentCreateModelEntry = {
  modelKey: string;
  modelName?: string;
  provider?: string;
  isReasoning?: boolean;
};

export const agentCreateModelEntrySchema: Schema<AgentCreateModelEntry> = s.object<AgentCreateModelEntry>({
  modelKey: s.string(),
  modelName: s.optional(s.string()),
  provider: s.optional(s.string()),
  isReasoning: s.optional(s.boolean()),
});
