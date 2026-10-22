import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { toolFunction2Schema, type ToolFunction2 } from "./tool-function2.js";
import { Type1, type1Schema } from "./type1.js";

/** A tool definition to be used by the OpenAI API. */
export type InternalTool = {
  /** Always `function`. @default Type1.Function */
  type?: Type1;
  /** The tool function definition, including the JSON Schema of its parameters. */
  function: ToolFunction2;
};

export const internalToolSchema: Schema<InternalTool> = s.object<InternalTool>({
  type: s.defaulted(type1Schema, Type1.Function),
  function: toolFunction2Schema,
});
