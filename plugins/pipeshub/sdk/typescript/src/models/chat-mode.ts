import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Optional execution mode for non-stream consumers of this shared request schema. `agent` uses the
 * universal agent loop, while `internal_search` and `web_search` use their corresponding assistant
 * search paths.
 */
export const ChatMode = {
  Agent: "agent",
  InternalSearch: "internal_search",
  WebSearch: "web_search",
} as const;
export type ChatMode = (typeof ChatMode)[keyof typeof ChatMode] | (string & {});

export const chatModeSchema: EnumSchema<ChatMode> = s.enumOf<ChatMode>(ChatMode);
