import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** LLM API provider. */
export const PromptLlmProvider = {
  Anthropic: "anthropic",
  AzureOpenai: "azure_openai",
  Google: "google",
  Openai: "openai",
} as const;
export type PromptLlmProvider = (typeof PromptLlmProvider)[keyof typeof PromptLlmProvider] | (string & {});

export const promptLlmProviderSchema: EnumSchema<PromptLlmProvider> =
  s.enumOf<PromptLlmProvider>(PromptLlmProvider);
