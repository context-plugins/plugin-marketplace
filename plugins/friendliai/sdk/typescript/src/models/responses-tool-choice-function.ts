import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ResponsesToolChoiceFunction = {
  /** For function calling, the type is always `function`. @default "function" */
  type?: "function";
  /** The name of the function to call. */
  name: string;
};

export const responsesToolChoiceFunctionSchema: Schema<ResponsesToolChoiceFunction> =
  s.object<ResponsesToolChoiceFunction>({
    type: s.defaulted(s.literal("function"), "function"),
    name: s.string(),
  });
