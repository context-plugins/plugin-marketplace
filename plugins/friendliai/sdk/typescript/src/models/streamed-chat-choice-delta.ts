import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { content2Schema, type Content2 } from "./unions/content2.js";
import { role2Schema, type Role2 } from "./unions/role2.js";
import { toolCalls2Schema, type ToolCalls2 } from "./unions/tool-calls2.js";

export type StreamedChatChoiceDelta = {
  /** The contents of the assistant message. */
  content?: Content2;
  /** Role of the generated message author, in this case `assistant`. */
  role?: Role2;
  toolCalls?: ToolCalls2;
};

export const streamedChatChoiceDeltaSchema: Schema<StreamedChatChoiceDelta> =
  s.object<StreamedChatChoiceDelta>({
    content: s.optional(s.lazy(() => content2Schema)),
    role: s.optional(s.lazy(() => role2Schema)),
    toolCalls: s.optional(s.lazy(() => toolCalls2Schema)),
    _keysMap: {
      toolCalls: "tool_calls",
    },
  });
