import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MessagesStreamThinkingDelta = {
  /** Delta type. @default "thinking_delta" */
  type?: "thinking_delta";
  /** Reasoning fragment when `type=thinking_delta`. */
  thinking: string;
};

export const messagesStreamThinkingDeltaSchema: Schema<MessagesStreamThinkingDelta> =
  s.object<MessagesStreamThinkingDelta>({
    type: s.defaulted(s.literal("thinking_delta"), "thinking_delta"),
    thinking: s.string(),
  });
