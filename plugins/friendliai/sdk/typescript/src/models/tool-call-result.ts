import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { functionResultSchema, type FunctionResult } from "./function-result.js";

export type ToolCallResult = {
  /** The type of the tool. @default "function" */
  type?: "function";
  /** The ID of the tool call. */
  id: string;
  function: FunctionResult;
};

export const toolCallResultSchema: Schema<ToolCallResult> = s.object<ToolCallResult>({
  type: s.defaulted(s.literal("function"), "function"),
  id: s.string(),
  function: functionResultSchema,
});
