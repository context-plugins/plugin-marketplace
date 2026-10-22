import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { signatureSchema, type Signature } from "./unions/signature.js";

export type MessagesThinkingBlock = {
  /** Content block type. Must be `thinking`. @default "thinking" */
  type?: "thinking";
  /** Reasoning content for this block. */
  thinking: string;
  /** Optional signature associated with the reasoning content. */
  signature?: Signature;
};

export const messagesThinkingBlockSchema: Schema<MessagesThinkingBlock> = s.object<MessagesThinkingBlock>({
  type: s.defaulted(s.literal("thinking"), "thinking"),
  thinking: s.string(),
  signature: s.optional(s.lazy(() => signatureSchema)),
});
