import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { content6Schema, type Content6 } from "./unions/content6.js";

export type MessagesToolResultBlock = {
  /** Content block type. Must be `tool_result`. @default "tool_result" */
  type?: "tool_result";
  /** Identifier of the related `tool_use` block this result answers. */
  toolUseId: string;
  /**
   * Tool result payload. Can be plain text, a list of objects, or null when no body is returned.
   */
  content?: Content6;
};

export const messagesToolResultBlockSchema: Schema<MessagesToolResultBlock> =
  s.object<MessagesToolResultBlock>({
    type: s.defaulted(s.literal("tool_result"), "tool_result"),
    toolUseId: s.string(),
    content: s.optional(s.lazy(() => content6Schema)),
    _keysMap: {
      toolUseId: "tool_use_id",
    },
  });
