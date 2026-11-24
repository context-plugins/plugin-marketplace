import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Name of the LLM provider. */
export const Provider = {
  Openai: "openai",
  Anthropic: "anthropic",
  AzureOpenai: "azure_openai",
} as const;
export type Provider = (typeof Provider)[keyof typeof Provider] | (string & {});

export const providerSchema: EnumSchema<Provider> = s.enumOf<Provider>(Provider);
