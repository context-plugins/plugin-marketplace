import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ToolsCallParameter = {
  /** The name of the parameter */
  name: string;
  /** The value of the parameter (for primitive types) */
  value: string;
  /** The value of the parameter (for array types) */
  items?: ToolsCallParameter[];
  /** The value of the parameter (for object types) */
  properties?: Record<string, ToolsCallParameter>;
};

export const toolsCallParameterSchema: Schema<ToolsCallParameter> = s.object<ToolsCallParameter>({
  name: s.string(),
  value: s.string(),
  items: s.optional(s.array(s.lazy(() => toolsCallParameterSchema))),
  properties: s.optional(
    s.record(
      s.string(),
      s.lazy(() => toolsCallParameterSchema),
    ),
  ),
});
