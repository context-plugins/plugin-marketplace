import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  chatCompleteBodyToolChoiceSchema,
  type ChatCompleteBodyToolChoice,
} from "../chat-complete-body-tool-choice.js";

/**
 * Determines the tool calling behavior of the model. When set to `none`, the model will bypass tool
 * execution and generate a response directly. In `auto` mode (the default), the model dynamically
 * decides whether to call a tool or respond with a message. Alternatively, setting `required`
 * ensures that the model invokes at least one tool before responding to the user. You can also
 * specify a particular tool by `{"type": "function", "function": {"name": "my_function"}}`.
 */
export type ToolChoice1 = ChatCompleteBodyToolChoice | string;

export const toolChoice1Schema: Schema<ToolChoice1> = s.of<ToolChoice1>(
  s.union([s.lazy(() => chatCompleteBodyToolChoiceSchema), s.string()]),
);
