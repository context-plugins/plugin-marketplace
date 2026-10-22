import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Compatibility block type. These blocks are accepted for parsing compatibility and ignored for
 * generation.
 */
export const Type1 = {
  Document: "document",
  SearchResult: "search_result",
  RedactedThinking: "redacted_thinking",
  ServerToolUse: "server_tool_use",
  WebSearchToolResult: "web_search_tool_result",
  WebFetchToolResult: "web_fetch_tool_result",
  CodeExecutionToolResult: "code_execution_tool_result",
  BashCodeExecutionToolResult: "bash_code_execution_tool_result",
  TextEditorCodeExecutionToolResult: "text_editor_code_execution_tool_result",
  ToolSearchToolResult: "tool_search_tool_result",
  ContainerUpload: "container_upload",
} as const;
export type Type1 = (typeof Type1)[keyof typeof Type1] | (string & {});

export const type1Schema: EnumSchema<Type1> = s.enumOf<Type1>(Type1);
