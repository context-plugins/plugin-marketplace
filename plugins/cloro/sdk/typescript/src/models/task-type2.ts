import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The AI provider to use for this task. */
export const TaskType2 = {
  Aimode: "AIMODE",
  Google: "GOOGLE",
  GoogleNews: "GOOGLE_NEWS",
  GoogleProduct: "GOOGLE_PRODUCT",
  Gemini: "GEMINI",
  Chatgpt: "CHATGPT",
  Copilot: "COPILOT",
  Perplexity: "PERPLEXITY",
} as const;
export type TaskType2 = (typeof TaskType2)[keyof typeof TaskType2] | (string & {});

export const taskType2Schema: EnumSchema<TaskType2> = s.enumOf<TaskType2>(TaskType2);
