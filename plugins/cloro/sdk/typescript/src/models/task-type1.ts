import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The AI provider for this task. */
export const TaskType1 = {
  Aimode: "AIMODE",
  Google: "GOOGLE",
  GoogleNews: "GOOGLE_NEWS",
  Gemini: "GEMINI",
  Chatgpt: "CHATGPT",
  Copilot: "COPILOT",
  Perplexity: "PERPLEXITY",
  Grok: "GROK",
} as const;
export type TaskType1 = (typeof TaskType1)[keyof typeof TaskType1] | (string & {});

export const taskType1Schema: EnumSchema<TaskType1> = s.enumOf<TaskType1>(TaskType1);
