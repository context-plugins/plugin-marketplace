import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AssistantMessageToolCallFunction = {
  /** The name of function. */
  name: string;
  /** The arguments of function in JSON schema format to call the function. */
  arguments: string;
};

export const assistantMessageToolCallFunctionSchema: Schema<AssistantMessageToolCallFunction> =
  s.object<AssistantMessageToolCallFunction>({
    name: s.string(),
    arguments: s.string(),
  });
