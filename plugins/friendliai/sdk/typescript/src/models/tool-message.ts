import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { name3Schema, type Name3 } from "./unions/name3.js";

export type ToolMessage = {
  /** The role of the messages author. @default "tool" */
  role?: "tool";
  /** The content of tool message that contains the result of tool calling. */
  content: string;
  /** The ID of tool call corresponding to this message. */
  toolCallId: string;
  /** An optional name of the tool call corresponding to this message. */
  name?: Name3;
};

export const toolMessageSchema: Schema<ToolMessage> = s.object<ToolMessage>({
  role: s.defaulted(s.literal("tool"), "tool"),
  content: s.string(),
  toolCallId: s.string(),
  name: s.optional(s.lazy(() => name3Schema)),
  _keysMap: {
    toolCallId: "tool_call_id",
  },
});
