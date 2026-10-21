import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  promptHistoryLinkedToolSchema,
  type PromptHistoryLinkedTool,
} from "../prompt-history-linked-tool.js";

/** Session end tool that was configured on this version of the prompt, if any */
export type SessionEndTool1 = PromptHistoryLinkedTool;

export const sessionEndTool1Schema: Schema<SessionEndTool1> = s.of<SessionEndTool1>(
  s.union([s.lazy(() => promptHistoryLinkedToolSchema)]),
);
