import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MessagesResponseThinkingBlock = {
  /** Content block type. @default "thinking" */
  type?: "thinking";
  /** Reasoning content returned by the model. */
  thinking: string;
  /** Signature associated with the reasoning content. */
  signature: string;
};

export const messagesResponseThinkingBlockSchema: Schema<MessagesResponseThinkingBlock> =
  s.object<MessagesResponseThinkingBlock>({
    type: s.defaulted(s.literal("thinking"), "thinking"),
    thinking: s.string(),
    signature: s.string(),
  });
