import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  responsesToolChoiceCustomSchema,
  type ResponsesToolChoiceCustom,
} from "../responses-tool-choice-custom.js";
import {
  responsesToolChoiceFunctionSchema,
  type ResponsesToolChoiceFunction,
} from "../responses-tool-choice-function.js";
import { toolChoiceSchema, type ToolChoice } from "../tool-choice.js";

/**
 * Controls which (if any) tool is called by the model. `none` means the model will not call any
 * tool and instead generates a message. `auto` means the model can pick between generating a
 * message or calling one or more tools. `required` means the model must call one or more tools. An
 * object can be used to force the model to call a specific function or custom tool.
 */
export type ToolChoice3 = ToolChoice | ResponsesToolChoiceFunction | ResponsesToolChoiceCustom;

export const toolChoice3Schema: Schema<ToolChoice3> = s.of<ToolChoice3>(
  s.union([
    s.lazy(() => toolChoiceSchema),
    s.lazy(() => responsesToolChoiceFunctionSchema),
    s.lazy(() => responsesToolChoiceCustomSchema),
  ]),
);
