import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Model = {
  Aimode: "aimode",
  Aioverview: "aioverview",
  Chatgpt: "chatgpt",
  Copilot: "copilot",
  Gemini: "gemini",
  Google: "google",
  Grok: "grok",
  Perplexity: "perplexity",
} as const;
export type Model = (typeof Model)[keyof typeof Model] | (string & {});

export const modelSchema: EnumSchema<Model> = s.enumOf<Model>(Model);
