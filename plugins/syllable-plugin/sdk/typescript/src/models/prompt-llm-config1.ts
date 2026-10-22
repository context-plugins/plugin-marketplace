import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { promptLlmProvider2Schema, type PromptLlmProvider2 } from "./prompt-llm-provider2.js";
import { apiVersionSchema, type ApiVersion } from "./unions/api-version.js";
import { seedSchema, type Seed } from "./unions/seed.js";
import { temperatureSchema, type Temperature } from "./unions/temperature.js";
import { version1Schema, type Version1 } from "./unions/version1.js";

/** The configuration for the LLM that the prompt uses */
export type PromptLlmConfig1 = {
  /** Provider of the LLM model. */
  provider?: PromptLlmProvider2;
  /** Name of the model. Must match the deployment name in Azure AI Studio. @default "gpt-4o" */
  model?: string;
  /**
   * Deprecated model version. This value is ignored and resolved automatically.
   *
   * @deprecated
   */
  version?: Version1;
  /** Version of the provider's API. */
  apiVersion?: ApiVersion;
  /**
   * Temperature parameter for the model. Determines randomness of responses - higher is more
   * random, lower is more focused. Must be between 0.0 and 2.0, inclusive.
   */
  temperature?: Temperature;
  /**
   * Deprecated by Syllable; leave unset for new configurations. Retained for backward compatibility
   * where supported, without a guarantee of identical responses. OpenAI and Azure OpenAI Chat
   * Completions offer best-effort seed support on supported models; Responses does not support
   * seed. Anthropic does not support seed as a sampling parameter. Google support depends on the
   * model and API. A saved value does not establish the endpoint or seed handling of a past
   * request, and sending seed does not prove that a provider honored it.
   *
   * @deprecated
   */
  seed?: Seed;
};

export const promptLlmConfig1Schema: Schema<PromptLlmConfig1> = s.object<PromptLlmConfig1>({
  provider: s.optional(s.lazy(() => promptLlmProvider2Schema)),
  model: s.defaulted(s.string(), "gpt-4o"),
  version: s.optional(s.lazy(() => version1Schema)),
  apiVersion: s.optional(s.lazy(() => apiVersionSchema)),
  temperature: s.optional(s.lazy(() => temperatureSchema)),
  seed: s.optional(s.lazy(() => seedSchema)),
  _keysMap: {
    apiVersion: "api_version",
  },
});
