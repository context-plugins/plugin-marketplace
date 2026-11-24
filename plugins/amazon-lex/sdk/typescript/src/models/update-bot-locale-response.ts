import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { audioFillerSettingsSchema, type AudioFillerSettings } from "./audio-filler-settings.js";
import { botLocaleStatus5Schema, type BotLocaleStatus5 } from "./bot-locale-status5.js";
import { generativeAiSettingsSchema, type GenerativeAiSettings } from "./generative-ai-settings.js";
import {
  speakerDiarizationSettingsSchema,
  type SpeakerDiarizationSettings,
} from "./speaker-diarization-settings.js";
import {
  speechDetectionSensitivity4Schema,
  type SpeechDetectionSensitivity4,
} from "./speech-detection-sensitivity4.js";
import {
  speechRecognitionSettingsSchema,
  type SpeechRecognitionSettings,
} from "./speech-recognition-settings.js";
import { unifiedSpeechSettingsSchema, type UnifiedSpeechSettings } from "./unified-speech-settings.js";
import { voiceSettingsSchema, type VoiceSettings } from "./voice-settings.js";

export type UpdateBotLocaleResponse = {
  /** The identifier of the bot that contains the updated locale. */
  botId?: string;
  /** The version of the bot that contains the updated locale. */
  botVersion?: string;
  /** The language and locale of the updated bot locale. */
  localeId?: string;
  /** The updated locale name for the locale. */
  localeName?: string;
  /** The updated description of the locale. */
  description?: string;
  /**
   * The updated confidence threshold for inserting the AMAZON.FallbackIntent and
   * AMAZON.KendraSearchIntent intents in the list of possible intents for an utterance.
   */
  nluIntentConfidenceThreshold?: number;
  voiceSettings?: VoiceSettings;
  unifiedSpeechSettings?: UnifiedSpeechSettings;
  audioFillerSettings?: AudioFillerSettings;
  speechRecognitionSettings?: SpeechRecognitionSettings;
  /** The current status of the locale. When the bot status is Built the locale is ready for use. */
  botLocaleStatus?: BotLocaleStatus5;
  /**
   * If the botLocaleStatus is Failed, the failureReasons field lists the errors that occurred while
   * building the bot.
   */
  failureReasons?: string[];
  /** A timestamp of the date and time that the locale was created. */
  creationDateTime?: Date;
  /** A timestamp of the date and time that the locale was last updated. */
  lastUpdatedDateTime?: Date;
  /** Recommended actions to take to resolve an error in the failureReasons field. */
  recommendedActions?: string[];
  generativeAiSettings?: GenerativeAiSettings;
  /** The updated sensitivity level for voice activity detection (VAD) in the bot locale. */
  speechDetectionSensitivity?: SpeechDetectionSensitivity4;
  speakerDiarizationSettings?: SpeakerDiarizationSettings;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateBotLocaleResponseSchema: Schema<UpdateBotLocaleResponse> =
  s.object<UpdateBotLocaleResponse>(
    {
      botId: s.optional(s.string()),
      botVersion: s.optional(s.string()),
      localeId: s.optional(s.string()),
      localeName: s.optional(s.string()),
      description: s.optional(s.string()),
      nluIntentConfidenceThreshold: s.optional(s.float64()),
      voiceSettings: s.optional(s.lazy(() => voiceSettingsSchema)),
      unifiedSpeechSettings: s.optional(s.lazy(() => unifiedSpeechSettingsSchema)),
      audioFillerSettings: s.optional(s.lazy(() => audioFillerSettingsSchema)),
      speechRecognitionSettings: s.optional(s.lazy(() => speechRecognitionSettingsSchema)),
      botLocaleStatus: s.optional(s.lazy(() => botLocaleStatus5Schema)),
      failureReasons: s.optional(s.array(s.string())),
      creationDateTime: s.optional(s.dateTime()),
      lastUpdatedDateTime: s.optional(s.dateTime()),
      recommendedActions: s.optional(s.array(s.string())),
      generativeAiSettings: s.optional(s.lazy(() => generativeAiSettingsSchema)),
      speechDetectionSensitivity: s.optional(s.lazy(() => speechDetectionSensitivity4Schema)),
      speakerDiarizationSettings: s.optional(s.lazy(() => speakerDiarizationSettingsSchema)),
      _keysMap: {
        generativeAiSettings: "generativeAISettings",
      },
    },
    { additionalProperties: s.json() },
  );
