import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AgentCreateWebSearch = {
  provider: string;
  providerKey?: string;
  providerLabel?: string;
  iconPath?: string;
};

export const agentCreateWebSearchSchema: Schema<AgentCreateWebSearch> = s.object<AgentCreateWebSearch>({
  provider: s.string(),
  providerKey: s.optional(s.string()),
  providerLabel: s.optional(s.string()),
  iconPath: s.optional(s.string()),
});
