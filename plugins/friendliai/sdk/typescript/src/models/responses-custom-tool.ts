import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { description3Schema, type Description3 } from "./unions/description3.js";

export type ResponsesCustomTool = {
  /** The type of the custom tool. Always `custom`. @default "custom" */
  type?: "custom";
  /** The name of the custom tool, used to identify it in tool calls. */
  name: string;
  /** Optional description of the custom tool, used to provide more context. */
  description?: Description3;
};

export const responsesCustomToolSchema: Schema<ResponsesCustomTool> = s.object<ResponsesCustomTool>({
  type: s.defaulted(s.literal("custom"), "custom"),
  name: s.string(),
  description: s.optional(s.lazy(() => description3Schema)),
});
