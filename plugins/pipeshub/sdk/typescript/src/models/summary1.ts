import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Summary1 = {
  /** Combined match count across both collections */
  totalMatches?: number;
  /** Match count in the assistant (`Conversation`) collection */
  assistantMatches?: number;
  /** Match count in the agent (`AgentConversation`) collection */
  agentMatches?: number;
  /** Trimmed search term that was applied */
  searchQuery?: string;
};

export const summary1Schema: Schema<Summary1> = s.object<Summary1>({
  totalMatches: s.optional(s.int()),
  assistantMatches: s.optional(s.int()),
  agentMatches: s.optional(s.int()),
  searchQuery: s.optional(s.string()),
});
