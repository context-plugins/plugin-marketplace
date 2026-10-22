import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Optional execution mode for non-stream consumers of this shared request schema. */
export const ChatMode2 = {
  Agent: "agent",
  InternalSearch: "internal_search",
  WebSearch: "web_search",
} as const;
export type ChatMode2 = (typeof ChatMode2)[keyof typeof ChatMode2] | (string & {});

export const chatMode2Schema: EnumSchema<ChatMode2> = s.enumOf<ChatMode2>(ChatMode2);
