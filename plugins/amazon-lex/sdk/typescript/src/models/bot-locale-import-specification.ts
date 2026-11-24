import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { audioFillerSettingsSchema, type AudioFillerSettings } from "./audio-filler-settings.js";
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

export type BotLocaleImportSpecification = {
  /** The identifier of the bot to import the locale to. */
  botId: string;
  /**
   * The version of the bot to import the locale to. This can only be the DRAFT version of the bot.
   */
  botVersion: string;
  /**
   * The identifier of the language and locale that the bot will be used in. The string must match
   * one of the supported locales. All of the intents, slot types, and slots used in the bot must
   * have the same locale. For more information, see Supported languages.
   */
  localeId: string;
  /**
   * Determines the threshold where Amazon Lex will insert the AMAZON.FallbackIntent,
   * AMAZON.KendraSearchIntent, or both when returning alternative intents. AMAZON.FallbackIntent
   * and AMAZON.KendraSearchIntent are only inserted if they are configured for the bot. For
   * example, suppose a bot is configured with the confidence threshold of 0.80 and the
   * AMAZON.FallbackIntent. Amazon Lex returns three alternative intents with the following
   * confidence scores: IntentA (0.70), IntentB (0.60), IntentC (0.50). The response from the
   * PostText operation would be: AMAZON.FallbackIntent IntentA IntentB IntentC
   */
  nluIntentConfidenceThreshold?: number;
  voiceSettings?: VoiceSettings;
  speechRecognitionSettings?: SpeechRecognitionSettings;
  /**
   * The sensitivity level for voice activity detection (VAD) in the bot locale. This setting helps
   * optimize speech recognition accuracy by adjusting how the system responds to background noise
   * during voice interactions.
   */
  speechDetectionSensitivity?: SpeechDetectionSensitivity;
  unifiedSpeechSettings?: UnifiedSpeechSettings;
  audioFillerSettings?: AudioFillerSettings;
  speakerDiarizationSettings?: SpeakerDiarizationSettings;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const botLocaleImportSpecificationSchema: Schema<BotLocaleImportSpecification> =
  s.object<BotLocaleImportSpecification>(
    {
      botId: s.string(),
      botVersion: s.string(),
      localeId: s.string(),
      nluIntentConfidenceThreshold: s.optional(s.float64()),
      voiceSettings: s.optional(s.lazy(() => voiceSettingsSchema)),
      speechRecognitionSettings: s.optional(s.lazy(() => speechRecognitionSettingsSchema)),
      speechDetectionSensitivity: s.optional(s.lazy(() => speechDetectionSensitivitySchema)),
      unifiedSpeechSettings: s.optional(s.lazy(() => unifiedSpeechSettingsSchema)),
      audioFillerSettings: s.optional(s.lazy(() => audioFillerSettingsSchema)),
      speakerDiarizationSettings: s.optional(s.lazy(() => speakerDiarizationSettingsSchema)),
    },
    { additionalProperties: s.json() },
  );
