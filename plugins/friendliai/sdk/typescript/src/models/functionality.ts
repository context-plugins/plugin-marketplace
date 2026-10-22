import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Whether the model supports specific features. */
export type Functionality = {
  /** Whether the model supports tool calling. */
  toolCall: boolean;
  /** Whether the model supports parallel function calling. */
  parallelToolCall: boolean;
  /** Whether you can enforce a specific output format. */
  structuredOutput: boolean;
  /** Whether you can control how the model handles tool calling. */
  toolChoice: boolean;
  /** Whether the model accepts system role messages. */
  systemMessages: boolean;
};

export const functionalitySchema: Schema<Functionality> = s.object<Functionality>({
  toolCall: s.boolean(),
  parallelToolCall: s.boolean(),
  structuredOutput: s.boolean(),
  toolChoice: s.boolean(),
  systemMessages: s.boolean(),
  _keysMap: {
    toolCall: "tool_call",
    parallelToolCall: "parallel_tool_call",
    structuredOutput: "structured_output",
    toolChoice: "tool_choice",
    systemMessages: "system_messages",
  },
});
