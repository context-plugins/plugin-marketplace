import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The AI provider for this task. */
export const TaskType5 = {
  Aimode: "AIMODE",
  BingAimode: "BING_AIMODE",
  Google: "GOOGLE",
  GoogleNews: "GOOGLE_NEWS",
  GoogleProduct: "GOOGLE_PRODUCT",
  Gemini: "GEMINI",
  Chatgpt: "CHATGPT",
} as const;
export type TaskType5 = (typeof TaskType5)[keyof typeof TaskType5] | (string & {});

export const taskType5Schema: EnumSchema<TaskType5> = s.enumOf<TaskType5>(TaskType5);
