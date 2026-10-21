import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  chatCompleteBodyToolChoiceFunctionSchema,
  type ChatCompleteBodyToolChoiceFunction,
} from "./chat-complete-body-tool-choice-function.js";

export type ChatCompleteBodyToolChoice = {
  /** The type of the tool. Currently, only `function` is supported. @default "function" */
  type?: "function";
  function: ChatCompleteBodyToolChoiceFunction;
};

export const chatCompleteBodyToolChoiceSchema: Schema<ChatCompleteBodyToolChoice> =
  s.object<ChatCompleteBodyToolChoice>({
    type: s.defaulted(s.literal("function"), "function"),
    function: chatCompleteBodyToolChoiceFunctionSchema,
  });
