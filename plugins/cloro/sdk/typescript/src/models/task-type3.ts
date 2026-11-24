import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The AI provider for this task. */
export const TaskType3 = {
  Aimode: "AIMODE",
  Google: "GOOGLE",
  GoogleNews: "GOOGLE_NEWS",
  GoogleProduct: "GOOGLE_PRODUCT",
  Gemini: "GEMINI",
  Chatgpt: "CHATGPT",
  Copilot: "COPILOT",
  Perplexity: "PERPLEXITY",
} as const;
export type TaskType3 = (typeof TaskType3)[keyof typeof TaskType3] | (string & {});

export const taskType3Schema: EnumSchema<TaskType3> = s.enumOf<TaskType3>(TaskType3);
