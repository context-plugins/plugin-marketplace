import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { toolAssistedChatToolSchema, type ToolAssistedChatTool } from "./tool-assisted-chat-tool.js";

/**
 * A list of tools the model may call. A maximum of 128 functions is supported. Use this to provide
 * a list of functions the model may generate JSON inputs for. For more detailed information about
 * each tool, please refer
 * [here](https://friendli.ai/docs/guides/model-apis/tool-assisted-api#built-in-tools).
 */
export type Tools20 = ToolAssistedChatTool[];

export const tools20Schema: Schema<Tools20> = s.of<Tools20>(
  s.union([s.array(s.lazy(() => toolAssistedChatToolSchema))]),
);
