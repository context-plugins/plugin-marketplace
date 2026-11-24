import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Custom LLM provider configuration for a Brand Kit. */
export type LlmConfig = {
  /** Name of the LLM provider (e.g., openai, anthropic, azure_openai). */
  provider?: string;
  /** The specific LLM model to use for content generation. */
  model?: string;
  /** Indicates whether a valid API key has been configured. */
  apiKeyConfigured?: boolean;
  /** ISO 8601 timestamp when the LLM configuration was set. */
  createdAt?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const llmConfigSchema: Schema<LlmConfig> = s.object<LlmConfig>(
  {
    provider: s.optional(s.string()),
    model: s.optional(s.string()),
    apiKeyConfigured: s.optional(s.boolean()),
    createdAt: s.optional(s.dateTime()),
    _keysMap: {
      apiKeyConfigured: "api_key_configured",
      createdAt: "created_at",
    },
  },
  { additionalProperties: s.json() },
);
