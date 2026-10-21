import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { id1Schema, type Id1 } from "./unions/id1.js";

export type MessagesToolUseBlock = {
  /** Content block type. Must be `tool_use`. @default "tool_use" */
  type?: "tool_use";
  /** Optional tool call identifier. Use this value to link follow-up `tool_result` blocks. */
  id?: Id1;
  /** Name of the tool to invoke. */
  name: string;
  /** Tool input argument object. */
  input: Record<string, unknown>;
};

export const messagesToolUseBlockSchema: Schema<MessagesToolUseBlock> = s.object<MessagesToolUseBlock>({
  type: s.defaulted(s.literal("tool_use"), "tool_use"),
  id: s.optional(s.lazy(() => id1Schema)),
  name: s.string(),
  input: s.record(s.string(), s.unknown()),
});
