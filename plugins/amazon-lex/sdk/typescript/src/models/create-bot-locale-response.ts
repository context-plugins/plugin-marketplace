import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { audioFillerSettingsSchema, type AudioFillerSettings } from "./audio-filler-settings.js";
import { botLocaleStatus2Schema, type BotLocaleStatus2 } from "./bot-locale-status2.js";
import { generativeAiSettingsSchema, type GenerativeAiSettings } from "./generative-ai-settings.js";
import {
  speakerDiarizationSettingsSchema,
  type SpeakerDiarizationSettings,
} from "./speaker-diarization-settings.js";
import {
  speechDetectionSensitivity1Schema,
  type SpeechDetectionSensitivity1,
} from "./speech-detection-sensitivity1.js";
import {
  speechRecognitionSettingsSchema,
  type SpeechRecognitionSettings,
} from "./speech-recognition-settings.js";
import { unifiedSpeechSettingsSchema, type UnifiedSpeechSettings } from "./unified-speech-settings.js";
import { voiceSettingsSchema, type VoiceSettings } from "./voice-settings.js";

export type CreateBotLocaleResponse = {
  /** The specified bot identifier. */
  botId?: string;
  /** The specified bot version. */
  botVersion?: string;
  /** The specified locale name. */
  localeName?: string;
  /** The specified locale identifier. */
  localeId?: string;
  /** The specified description of the bot locale. */
  description?: string;
  /**
   * The specified confidence threshold for inserting the AMAZON.FallbackIntent and
   * AMAZON.KendraSearchIntent intents.
   */
  nluIntentConfidenceThreshold?: number;
  voiceSettings?: VoiceSettings;
  unifiedSpeechSettings?: UnifiedSpeechSettings;
  audioFillerSettings?: AudioFillerSettings;
  speechRecognitionSettings?: SpeechRecognitionSettings;
  /**
   * The status of the bot. When the status is Creating the bot locale is being configured. When the
   * status is Building Amazon Lex is building the bot for testing and use. If the status of the bot
   * is ReadyExpressTesting, you can test the bot using the exact utterances specified in the bots'
   * intents. When the bot is ready for full testing or to run, the status is Built. If there was a
   * problem with building the bot, the status is Failed. If the bot was saved but not built, the
   * status is NotBuilt.
   */
  botLocaleStatus?: BotLocaleStatus2;
  /** A timestamp specifying the date and time that the bot locale was created. */
  creationDateTime?: Date;
  generativeAiSettings?: GenerativeAiSettings;
  /**
   * The sensitivity level for voice activity detection (VAD) that was specified for the bot locale.
   */
  speechDetectionSensitivity?: SpeechDetectionSensitivity1;
  speakerDiarizationSettings?: SpeakerDiarizationSettings;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createBotLocaleResponseSchema: Schema<CreateBotLocaleResponse> =
  s.object<CreateBotLocaleResponse>(
    {
      botId: s.optional(s.string()),
      botVersion: s.optional(s.string()),
      localeName: s.optional(s.string()),
      localeId: s.optional(s.string()),
      description: s.optional(s.string()),
      nluIntentConfidenceThreshold: s.optional(s.float64()),
      voiceSettings: s.optional(s.lazy(() => voiceSettingsSchema)),
      unifiedSpeechSettings: s.optional(s.lazy(() => unifiedSpeechSettingsSchema)),
      audioFillerSettings: s.optional(s.lazy(() => audioFillerSettingsSchema)),
      speechRecognitionSettings: s.optional(s.lazy(() => speechRecognitionSettingsSchema)),
      botLocaleStatus: s.optional(s.lazy(() => botLocaleStatus2Schema)),
      creationDateTime: s.optional(s.dateTime()),
      generativeAiSettings: s.optional(s.lazy(() => generativeAiSettingsSchema)),
      speechDetectionSensitivity: s.optional(s.lazy(() => speechDetectionSensitivity1Schema)),
      speakerDiarizationSettings: s.optional(s.lazy(() => speakerDiarizationSettingsSchema)),
      _keysMap: {
        generativeAiSettings: "generativeAISettings",
      },
    },
    { additionalProperties: s.json() },
  );
