import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MessagesStreamStartToolUseBlock = {
  /** Content block type. @default "tool_use" */
  type?: "tool_use";
  /** Tool call ID when `type=tool_use`. */
  id: string;
  /** Tool name when `type=tool_use`. */
  name: string;
  /** Parsed tool input object when `type=tool_use`. */
  input: Record<string, unknown>;
};

export const messagesStreamStartToolUseBlockSchema: Schema<MessagesStreamStartToolUseBlock> =
  s.object<MessagesStreamStartToolUseBlock>({
    type: s.defaulted(s.literal("tool_use"), "tool_use"),
    id: s.string(),
    name: s.string(),
    input: s.record(s.string(), s.unknown()),
  });
