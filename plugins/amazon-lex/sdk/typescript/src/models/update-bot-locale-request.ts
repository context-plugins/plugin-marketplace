import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { audioFillerSettingsSchema, type AudioFillerSettings } from "./audio-filler-settings.js";
import { generativeAiSettingsSchema, type GenerativeAiSettings } from "./generative-ai-settings.js";
import {
  speakerDiarizationSettingsSchema,
  type SpeakerDiarizationSettings,
} from "./speaker-diarization-settings.js";
import {
  speechDetectionSensitivity3Schema,
  type SpeechDetectionSensitivity3,
} from "./speech-detection-sensitivity3.js";
import {
  speechRecognitionSettingsSchema,
  type SpeechRecognitionSettings,
} from "./speech-recognition-settings.js";
import { unifiedSpeechSettingsSchema, type UnifiedSpeechSettings } from "./unified-speech-settings.js";
import { voiceSettingsSchema, type VoiceSettings } from "./voice-settings.js";

export type UpdateBotLocaleRequest = {
  /** The unique identifier of the bot that contains the locale. */
  botId: string;
  /**
   * The version of the bot that contains the locale to be updated. The version can only be the
   * DRAFT version.
   */
  botVersion: string;
  /**
   * The identifier of the language and locale to update. The string must match one of the supported
   * locales. For more information, see Supported languages.
   */
  localeId: string;
  /** The new description of the locale. */
  description?: string;
  /**
   * The new confidence threshold where Amazon Lex inserts the AMAZON.FallbackIntent and
   * AMAZON.KendraSearchIntent intents in the list of possible intents for an utterance.
   */
  nluIntentConfidenceThreshold: number;
  voiceSettings?: VoiceSettings;
  unifiedSpeechSettings?: UnifiedSpeechSettings;
  audioFillerSettings?: AudioFillerSettings;
  speechRecognitionSettings?: SpeechRecognitionSettings;
  generativeAiSettings?: GenerativeAiSettings;
  /**
   * The new sensitivity level for voice activity detection (VAD) in the bot locale. This setting
   * helps optimize speech recognition accuracy by adjusting how the system responds to background
   * noise during voice interactions.
   */
  speechDetectionSensitivity?: SpeechDetectionSensitivity3;
  speakerDiarizationSettings?: SpeakerDiarizationSettings;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateBotLocaleRequestSchema: Schema<UpdateBotLocaleRequest> = s.object<UpdateBotLocaleRequest>(
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
    speechDetectionSensitivity: s.optional(s.lazy(() => speechDetectionSensitivity3Schema)),
    speakerDiarizationSettings: s.optional(s.lazy(() => speakerDiarizationSettingsSchema)),
    _keysMap: {
      generativeAiSettings: "generativeAISettings",
    },
  },
  { additionalProperties: s.json() },
);
