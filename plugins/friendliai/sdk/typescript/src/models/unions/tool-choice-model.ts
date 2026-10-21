import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { messagesToolChoiceSchema, type MessagesToolChoice } from "../messages-tool-choice.js";

/**
 * Controls tool-calling behavior (`auto`, `any`, `tool`, `none`) and optional parallel-call
 * behavior.
 */
export type ToolChoiceModel = MessagesToolChoice;

export const toolChoiceModelSchema: Schema<ToolChoiceModel> = s.of<ToolChoiceModel>(
  s.union([s.lazy(() => messagesToolChoiceSchema)]),
);
