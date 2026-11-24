import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { audioFillerSettingsSchema, type AudioFillerSettings } from "./audio-filler-settings.js";
import { generativeAiSettingsSchema, type GenerativeAiSettings } from "./generative-ai-settings.js";
import {
  speakerDiarizationSettingsSchema,
  type SpeakerDiarizationSettings,
} from "./speaker-diarization-settings.js";
import {
  speechDetectionSensitivitySchema,
  type SpeechDetectionSensitivity,
} from "./speech-detection-sensitivity.js";
import {
  speechRecognitionSettingsSchema,
  type SpeechRecognitionSettings,
} from "./speech-recognition-settings.js";
import { unifiedSpeechSettingsSchema, type UnifiedSpeechSettings } from "./unified-speech-settings.js";
import { voiceSettingsSchema, type VoiceSettings } from "./voice-settings.js";

export type CreateBotLocaleRequest = {
  /** The identifier of the bot to create the locale for. */
  botId: string;
  /**
   * The version of the bot to create the locale for. This can only be the draft version of the bot.
   */
  botVersion: string;
  /**
   * The identifier of the language and locale that the bot will be used in. The string must match
   * one of the supported locales. All of the intents, slot types, and slots used in the bot must
   * have the same locale. For more information, see Supported languages.
   */
  localeId: string;
  /** A description of the bot locale. Use this to help identify the bot locale in lists. */
  description?: string;
  /**
   * Determines the threshold where Amazon Lex will insert the AMAZON.FallbackIntent,
   * AMAZON.KendraSearchIntent, or both when returning alternative intents. AMAZON.FallbackIntent
   * and AMAZON.KendraSearchIntent are only inserted if they are configured for the bot. For
   * example, suppose a bot is configured with the confidence threshold of 0.80 and the
   * AMAZON.FallbackIntent. Amazon Lex returns three alternative intents with the following
   * confidence scores: IntentA (0.70), IntentB (0.60), IntentC (0.50). The response from the
   * RecognizeText operation would be: AMAZON.FallbackIntent IntentA IntentB IntentC
   */
  nluIntentConfidenceThreshold: number;
  voiceSettings?: VoiceSettings;
  unifiedSpeechSettings?: UnifiedSpeechSettings;
  audioFillerSettings?: AudioFillerSettings;
  speechRecognitionSettings?: SpeechRecognitionSettings;
  generativeAiSettings?: GenerativeAiSettings;
  /**
   * The sensitivity level for voice activity detection (VAD) in the bot locale. This setting helps
   * optimize speech recognition accuracy by adjusting how the system responds to background noise
   * during voice interactions.
   */
  speechDetectionSensitivity?: SpeechDetectionSensitivity;
  speakerDiarizationSettings?: SpeakerDiarizationSettings;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createBotLocaleRequestSchema: Schema<CreateBotLocaleRequest> = s.object<CreateBotLocaleRequest>(
  {
    botId: s.string(),
    botVersion: s.string(),
    localeId: s.string(),
    description: s.optional(s.string()),
    nluIntentConfidenceThreshold: s.float64(),
    voiceSettings: s.optional(s.lazy(() => voiceSettingsSchema)),
    unifiedSpeechSettings: s.optional(s.lazy(() => unifiedSpeechSettingsSchema)),
    audioFillerSettings: s.optional(s.lazy(() => audioFillerSettingsSchema)),
    speechRecognitionSettings: s.optional(s.lazy(() => speechRecognitionSettingsSchema)),
    generativeAiSettings: s.optional(s.lazy(() => generativeAiSettingsSchema)),
    speechDetectionSensitivity: s.optional(s.lazy(() => speechDetectionSensitivitySchema)),
    speakerDiarizationSettings: s.optional(s.lazy(() => speakerDiarizationSettingsSchema)),
    _keysMap: {
      generativeAiSettings: "generativeAISettings",
    },
  },
  { additionalProperties: s.json() },
);
