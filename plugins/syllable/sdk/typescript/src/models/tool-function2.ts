import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The tool function definition, including the JSON Schema of its parameters. */
export type ToolFunction2 = {
  /** The name of the function/tool call. */
  name: string;
  /** The description of the tool. */
  description: string;
  /** The JSON Schema of parameters of the function/tool call. */
  parameters: Record<string, unknown>;
};

export const toolFunction2Schema: Schema<ToolFunction2> = s.object<ToolFunction2>({
  name: s.string(),
  description: s.string(),
  parameters: s.record(s.string(), s.unknown()),
});
