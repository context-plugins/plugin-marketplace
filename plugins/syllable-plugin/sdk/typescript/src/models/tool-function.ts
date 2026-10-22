import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * A function available to an agent.
 *
 * See:
 * - https://learn.microsoft.com/en-us/azure/ai-services/openai/how-to/function-calling
 */
export type ToolFunction = {
  /** The name of the function/tool call. */
  name: string;
  /** The description of the tool. */
  description: string;
  /** The JSON Schema of parameters of the function/tool call. */
  parameters: Record<string, unknown>;
};

export const toolFunctionSchema: Schema<ToolFunction> = s.object<ToolFunction>({
  name: s.string(),
  description: s.string(),
  parameters: s.record(s.string(), s.unknown()),
});
