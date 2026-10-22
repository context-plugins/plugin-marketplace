import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  platformChatInputMessageSchema,
  type PlatformChatInputMessage,
} from "../platform-chat-input-message.js";

/**
 * Either a plain string (single user turn) or a chronological array of `USER`/`ASSISTANT` messages.
 * The final array message must be `USER`.
 */
export type Input = string | PlatformChatInputMessage[];

export const inputSchema: Schema<Input> = s.of<Input>(
  s.union([s.string(), s.array(s.lazy(() => platformChatInputMessageSchema))]),
);
