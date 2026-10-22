import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** AI model configuration recorded against a conversation or message. */
export type ConversationModelInfo = {
  /** Stable identifier of the configured model record */
  modelKey?: string;
  /** Provider-facing model name (e.g. `gpt-5.6-luna`) */
  modelName?: string;
  /** Provider key (e.g. `openai`, `anthropic`) */
  modelProvider?: string;
  /** Human-readable display name */
  modelFriendlyName?: string;
  /** Chat mode used for this turn (e.g. `quick`, `internal_search`) */
  chatMode?: string;
};

export const conversationModelInfoSchema: Schema<ConversationModelInfo> = s.object<ConversationModelInfo>({
  modelKey: s.optional(s.string()),
  modelName: s.optional(s.string()),
  modelProvider: s.optional(s.string()),
  modelFriendlyName: s.optional(s.string()),
  chatMode: s.optional(s.string()),
});
