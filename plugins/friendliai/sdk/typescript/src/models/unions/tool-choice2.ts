import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { toolChoice3Schema, type ToolChoice3 } from "./tool-choice3.js";

/**
 * How the model should select which tool (or tools) to use when generating a response. See the
 * `tools` parameter to see how to specify which tools the model can call.
 */
export type ToolChoice2 = ToolChoice3;

export const toolChoice2Schema: Schema<ToolChoice2> = s.of<ToolChoice2>(
  s.union([s.lazy(() => toolChoice3Schema)]),
);
