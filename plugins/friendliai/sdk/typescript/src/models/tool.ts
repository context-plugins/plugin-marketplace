import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { functionSchema, type Function } from "./function.js";

export type Tool = {
  /** The type of the tool. Currently, only `function` is supported. @default "function" */
  type?: "function";
  function: Function;
};

export const toolSchema: Schema<Tool> = s.object<Tool>({
  type: s.defaulted(s.literal("function"), "function"),
  function: functionSchema,
});
