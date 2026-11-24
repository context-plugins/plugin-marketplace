import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { providerSchema, type Provider } from "./provider.js";

/** Parameters for configuring custom LLM credentials. */
export type CreateLlmConfigRequest = {
  /** Name of the LLM provider. */
  provider: Provider;
  /** The LLM model identifier to use. */
  model?: string;
  /** API key for authenticating with the LLM provider. */
  apiKey: string;
  /** Custom endpoint URL for Azure OpenAI or self-hosted deployments. */
  endpoint?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const createLlmConfigRequestProperties: s.Shape<CreateLlmConfigRequest> = {
  provider: providerSchema,
  model: s.optional(s.string()),
  apiKey: s.string(),
  endpoint: s.optional(s.string()),
  _keysMap: {
    apiKey: "api_key",
  },
};

export const createLlmConfigRequestInternalSchema: Schema<CreateLlmConfigRequest> =
  s.object<CreateLlmConfigRequest>(createLlmConfigRequestProperties, { additionalProperties: s.json() });

export const createLlmConfigRequestSchema: Schema<CreateLlmConfigRequest> = s.lazySchema(() =>
  s.object<CreateLlmConfigRequest>(
    {
      ...createLlmConfigRequestProperties,
      endpoint: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
