import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Provider of the LLM model. */
export const PromptLlmProvider2 = {
  Anthropic: "anthropic",
  AzureOpenai: "azure_openai",
  Google: "google",
  Openai: "openai",
} as const;
export type PromptLlmProvider2 = (typeof PromptLlmProvider2)[keyof typeof PromptLlmProvider2] | (string & {});

export const promptLlmProvider2Schema: EnumSchema<PromptLlmProvider2> =
  s.enumOf<PromptLlmProvider2>(PromptLlmProvider2);
