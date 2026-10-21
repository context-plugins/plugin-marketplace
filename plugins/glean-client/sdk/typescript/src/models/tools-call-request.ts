import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { toolsCallParameterSchema, type ToolsCallParameter } from "./tools-call-parameter.js";

export type ToolsCallRequest = {
  /** Required name of the tool to execute */
  name: string;
  /**
   * The parameters for the tool. Each key is the name of the parameter and the value is the
   * parameter object.
   */
  parameters: Record<string, ToolsCallParameter>;
};

export const toolsCallRequestSchema: Schema<ToolsCallRequest> = s.object<ToolsCallRequest>({
  name: s.string(),
  parameters: s.record(
    s.string(),
    s.lazy(() => toolsCallParameterSchema),
  ),
});
