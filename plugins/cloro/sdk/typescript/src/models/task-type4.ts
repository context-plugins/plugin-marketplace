import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The AI provider to use for this task. */
export const TaskType4 = {
  Aimode: "AIMODE",
  BingAimode: "BING_AIMODE",
  Google: "GOOGLE",
  GoogleNews: "GOOGLE_NEWS",
  GoogleProduct: "GOOGLE_PRODUCT",
  Gemini: "GEMINI",
  Chatgpt: "CHATGPT",
} as const;
export type TaskType4 = (typeof TaskType4)[keyof typeof TaskType4] | (string & {});

export const taskType4Schema: EnumSchema<TaskType4> = s.enumOf<TaskType4>(TaskType4);
