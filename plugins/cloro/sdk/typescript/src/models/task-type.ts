import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The AI provider to use for this task. */
export const TaskType = {
  Aimode: "AIMODE",
  Google: "GOOGLE",
  GoogleNews: "GOOGLE_NEWS",
  Gemini: "GEMINI",
  Chatgpt: "CHATGPT",
  Copilot: "COPILOT",
  Perplexity: "PERPLEXITY",
  Grok: "GROK",
} as const;
export type TaskType = (typeof TaskType)[keyof typeof TaskType] | (string & {});

export const taskTypeSchema: EnumSchema<TaskType> = s.enumOf<TaskType>(TaskType);
