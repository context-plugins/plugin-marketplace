import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { speechModelConfigSchema, type SpeechModelConfig } from "./speech-model-config.js";
import { speechModelPreferenceSchema, type SpeechModelPreference } from "./speech-model-preference.js";

export type SpeechRecognitionSettings = {
  /** The speech-to-text model to use. */
  speechModelPreference?: SpeechModelPreference;
  speechModelConfig?: SpeechModelConfig;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const speechRecognitionSettingsSchema: Schema<SpeechRecognitionSettings> =
  s.object<SpeechRecognitionSettings>(
    {
      speechModelPreference: s.optional(s.lazy(() => speechModelPreferenceSchema)),
      speechModelConfig: s.optional(s.lazy(() => speechModelConfigSchema)),
    },
    { additionalProperties: s.json() },
  );
