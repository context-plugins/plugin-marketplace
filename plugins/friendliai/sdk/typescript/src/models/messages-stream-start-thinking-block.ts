import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { signature1Schema, type Signature1 } from "./unions/signature1.js";

export type MessagesStreamStartThinkingBlock = {
  /** Content block type. @default "thinking" */
  type?: "thinking";
  /** Reasoning content when `type=thinking`. */
  thinking: string;
  /** Optional signature when `type=thinking`. */
  signature?: Signature1;
};

export const messagesStreamStartThinkingBlockSchema: Schema<MessagesStreamStartThinkingBlock> =
  s.object<MessagesStreamStartThinkingBlock>({
    type: s.defaulted(s.literal("thinking"), "thinking"),
    thinking: s.string(),
    signature: s.optional(s.lazy(() => signature1Schema)),
  });
