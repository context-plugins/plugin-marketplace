import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { toolParameterTransform2Schema, type ToolParameterTransform2 } from "./tool-parameter-transform2.js";

/** The default value for a parameter of a tool call. */
export type ToolParameterDefault = {
  /** The transform to apply to the value before using it as the default. */
  transform: ToolParameterTransform2;
};

export const toolParameterDefaultSchema: Schema<ToolParameterDefault> = s.object<ToolParameterDefault>({
  transform: toolParameterTransform2Schema,
});
