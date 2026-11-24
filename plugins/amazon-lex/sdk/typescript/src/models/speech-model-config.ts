import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  deepgramSpeechModelConfigSchema,
  type DeepgramSpeechModelConfig,
} from "./deepgram-speech-model-config.js";

export type SpeechModelConfig = {
  deepgramConfig?: DeepgramSpeechModelConfig;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const speechModelConfigSchema: Schema<SpeechModelConfig> = s.object<SpeechModelConfig>(
  {
    deepgramConfig: s.optional(s.lazy(() => deepgramSpeechModelConfigSchema)),
  },
  { additionalProperties: s.json() },
);
