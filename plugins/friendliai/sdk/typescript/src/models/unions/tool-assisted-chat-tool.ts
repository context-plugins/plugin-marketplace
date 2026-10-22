import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { fileBuiltInToolSchema, type FileBuiltInTool } from "../file-built-in-tool.js";
import { friendliBuiltInToolSchema, type FriendliBuiltInTool } from "../friendli-built-in-tool.js";
import { integratedBuiltInToolSchema, type IntegratedBuiltInTool } from "../integrated-built-in-tool.js";
import { toolSchema, type Tool } from "../tool.js";

export type ToolAssistedChatTool =
  | (FriendliBuiltInTool & { type: "code:python-interpreter" })
  | (FileBuiltInTool & { type: "file:text" })
  | (Tool & { type: "function" })
  | (IntegratedBuiltInTool & { type: "linkup:search" })
  | (FriendliBuiltInTool & { type: "math:calculator" })
  | (FriendliBuiltInTool & { type: "math:calendar" })
  | (FriendliBuiltInTool & { type: "math:statistics" })
  | (FriendliBuiltInTool & { type: "web:search" })
  | (FriendliBuiltInTool & { type: "web:url" });

export const toolAssistedChatToolSchema: Schema<ToolAssistedChatTool> =
  s.discriminatedUnion<ToolAssistedChatTool>("type", {
    "code:python-interpreter": friendliBuiltInToolSchema,
    "file:text": fileBuiltInToolSchema,
    function: toolSchema,
    "linkup:search": integratedBuiltInToolSchema,
    "math:calculator": friendliBuiltInToolSchema,
    "math:calendar": friendliBuiltInToolSchema,
    "math:statistics": friendliBuiltInToolSchema,
    "web:search": friendliBuiltInToolSchema,
    "web:url": friendliBuiltInToolSchema,
  });
